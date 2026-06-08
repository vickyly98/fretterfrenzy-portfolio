import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Image paths - place all images in src/images/ folder
  const homeImages = [
    './images/_8_5x11_Fruits.png',
    './images/artwork1.png',
    './images/artwork2.png',
    './images/artwork3.png',
    './images/artwork4.png',
    './images/artwork5.png',
    './images/artwork6.png',
    './images/artwork7.png',
    './images/artwork8.png',
    './images/artwork11.png',
    './images/artwork12.png',
    './images/artwork14.png',
    './images/artwork15.png',
    './images/4x6_Cat_Lace_2.png',
    './images/Cabybara_Love_You.png',
    './images/Group_8.png',
  ];

  const clayImages = [
    './images/Frame_73.png',
    './images/Frame_74.png',
    './images/Frame_75.png',
    './images/Frame_76.png',
    './images/Frame_77.png',
    './images/Frame_78.png',
    './images/Frame_79.png',
  ];

  const socialLinks = [
    { icon: '📸', url: 'https://www.instagram.com/fretterfrenzy/', label: 'Instagram' },
    { icon: '🎵', url: 'https://www.tiktok.com/@fretterfrenzy', label: 'TikTok' },
    { icon: '🛍️', url: 'https://www.etsy.com/shop/fretterfrenzy', label: 'Etsy Shop' },
  ];

  const images = activeTab === 'home' ? homeImages : clayImages;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>✨ FretterFrenzy</h1>
          <p style={styles.subtitle}>Art, prints & handmade goods</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabContainer}>
        <button
          onClick={() => setActiveTab('home')}
          style={{
            ...styles.tab,
            ...(activeTab === 'home' ? styles.tabActive : styles.tabInactive),
          }}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab('clay')}
          style={{
            ...styles.tab,
            ...(activeTab === 'clay' ? styles.tabActive : styles.tabInactive),
          }}
        >
          Polymer Clay
        </button>
      </div>

      {/* Gallery Grid */}
      <div style={styles.gallery}>
        {images.map((image, idx) => (
          <div
            key={idx}
            style={{
              ...styles.imageWrapper,
              animation: `fadeIn 0.5s ease-out ${idx * 0.05}s both`,
            }}
          >
            <img
              src={image}
              alt={`Gallery item ${idx + 1}`}
              style={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.socialLinks}>
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              style={styles.socialLink}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Poppins:wght@400;500;600&display=swap');

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
        }

        body {
          background: linear-gradient(135deg, #fef9f3 0%, #fef6f0 100%);
          font-family: 'Quicksand', sans-serif;
          color: #333;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fef9f3 0%, #fef6f0 100%)',
    paddingBottom: '3rem',
  },
  header: {
    background: 'linear-gradient(135deg, rgba(255, 182, 193, 0.1) 0%, rgba(176, 196, 222, 0.1) 100%)',
    padding: '2rem 1rem',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255, 182, 193, 0.3)',
    animation: 'slideIn 0.6s ease-out',
  },
  headerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    margin: '0 0 0.5rem',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#d4537e',
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    margin: '0',
    fontSize: '0.95rem',
    color: '#888780',
    fontWeight: '400',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1.5rem 1rem',
    maxWidth: '800px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  tab: {
    padding: '0.65rem 1.5rem',
    border: 'none',
    borderRadius: '24px',
    fontSize: '0.95rem',
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'capitalize',
  },
  tabActive: {
    background: 'linear-gradient(135deg, #d4537e 0%, #d85a8e 100%)',
    color: '#fff',
    boxShadow: '0 4px 12px rgba(212, 83, 126, 0.25)',
  },
  tabInactive: {
    background: '#fff',
    color: '#888780',
    border: '1px solid rgba(212, 83, 126, 0.2)',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    padding: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
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
    marginTop: '3rem',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    borderTop: '1px solid rgba(212, 83, 126, 0.15)',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  socialLink: {
    fontSize: '1.8rem',
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
  },
};
