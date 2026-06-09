import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('illustrations');

  const homeImages = [
    'artwork1.png',
    'artwork2.png',
    'artwork3.png',
    'artwork4.png',
    'artwork5.png',
    'artwork6.png',
    'artwork7.png',
    'artwork8.png',
    'artwork11.png',
    'artwork12.png',
    'artwork14.png',
    'artwork15.png',
    '4x6_Cat_Lace_2.png',
    'Cabybara_Love_You.png',
    'Group_8.png',
    '_8_5x11_Fruits.png',
  ];

  const clayImages = [
    'Frame_73.png',
    'Frame_74.png',
    'Frame_75.png',
    'Frame_76.png',
    'Frame_77.png',
    'Frame_78.png',
    'Frame_79.png',
  ];

  const images = activeTab === 'illustrations' ? homeImages : clayImages;

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Pixelify Sans', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <img 
          src="/logo.png" 
          alt="FretterFrenzy" 
          style={styles.logo}
        />
        <p style={styles.subtitle}>Art, prints & handmade goods</p>
      </div>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        <button
          onClick={() => setActiveTab('illustrations')}
          style={{
            ...styles.tab,
            ...(activeTab === 'illustrations' ? styles.tabActive : styles.tabInactive),
          }}
        >
          illustrations
        </button>
        <button
          onClick={() => setActiveTab('clay')}
          style={{
            ...styles.tab,
            ...(activeTab === 'clay' ? styles.tabActive : styles.tabInactive),
          }}
        >
          polymer clay
        </button>
      </div>

      {/* Gallery Grid */}
      <div style={styles.gallery}>
        {images.map((image, idx) => (
          <div
            key={idx}
            style={{
              ...styles.imageWrapper,
              animation: `fadeIn 0.4s ease-out ${idx * 0.04}s both`,
            }}
          >
            <img
              src={`/images/${image}`}
              alt={`Gallery item ${idx + 1}`}
              style={styles.image}
              loading="lazy"
              onError={(e) => {
                console.error(`Failed to load: ${image}`);
              }}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.socialLinks}>
          <a
            href="https://www.instagram.com/fretterfrenzy/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            style={styles.socialLink}
          >
            <img 
              src="/pixel_instagram.png" 
              alt="Instagram" 
              style={styles.icon}
            />
          </a>
          <a
            href="https://www.tiktok.com/@fretterfrenzy"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            style={styles.socialLink}
          >
            <img 
              src="/pixel_tiktok.png" 
              alt="TikTok" 
              style={styles.icon}
            />
          </a>
          <a
            href="https://www.etsy.com/shop/fretterfrenzy"
            target="_blank"
            rel="noopener noreferrer"
            title="Shop"
            style={styles.socialLink}
          >
            <img 
              src="/pixel_shop-solid.png" 
              alt="Shop" 
              style={styles.icon}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#fef6f0',
    paddingBottom: '4rem',
  },
  header: {
    background: '#f5ede4',
    padding: '2.5rem 1rem',
    textAlign: 'center',
    borderBottom: '2px solid #e8ddd0',
  },
  logo: {
    height: '60px',
    marginBottom: '0.5rem',
    imageRendering: 'pixelated',
  },
  subtitle: {
    margin: '0',
    fontSize: '14px',
    color: '#9db4d4',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
    gap: '2rem',
  },
  tab: {
    padding: '0.6rem 1.8rem',
    border: '2px solid #9db4d4',
    borderRadius: '20px',
    fontSize: '13px',
    fontFamily: "'Pixelify Sans', sans-serif",
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'lowercase',
    background: 'transparent',
  },
  tabActive: {
    background: '#9db4d4',
    color: '#fff',
    borderColor: '#9db4d4',
  },
  tabInactive: {
    background: 'transparent',
    color: '#9db4d4',
    borderColor: '#9db4d4',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.2rem',
    padding: '1.5rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '0 2px 6px rgba(157, 180, 212, 0.15)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    aspectRatio: '1',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  footer: {
    marginTop: '4rem',
    paddingTop: '2rem',
    paddingBottom: '1.5rem',
    borderTop: '2px solid #e8ddd0',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  socialLink: {
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'transform 0.2s ease',
  },
  icon: {
    width: '40px',
    height: '40px',
    imageRendering: 'pixelated',
  },
};
