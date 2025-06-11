// components/Sidebar/Sidebar.tsx
import React, { useEffect } from 'react';
import { FaHome, FaPlus, FaBook, FaTwitter, FaDiscord, FaGithub, FaChartBar, FaMoon, FaSun, FaChevronLeft, FaTimes, FaSearch } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/favicon-DF3inq3Z.png'; // Import your logo image

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, isMobile = false }) => {
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { icon: <FaHome />, text: 'Home', path: '/' },
    { icon: <FaPlus />, text: 'Create', path: '/create' }
  ];

  const externalLinks = [
    { icon: <FaBook />, text: 'Documentation', url: '#' },
    { icon: <FaTwitter />, text: 'Twitter', url: '#' },
    { icon: <FaDiscord />, text: 'Discord', url: '#' },
    { icon: <FaGithub />, text: 'GitHub', url: '#' },
    { icon: <FaChartBar />, text: 'Status', url: '#' }
  ];

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('.sidebar');
      const target = event.target as Node;
      
      if (sidebar && !sidebar.contains(target)) {
        onToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isOpen, onToggle]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onToggle} />}
      
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <img src={logoImage} alt="MoveDAO Logo" className="logo-image" />
            {isOpen && <span className="logo-text">MoveDAO</span>}
          </Link>
          
          {/* Mobile Close Button */}
          {isMobile && isOpen && (
            <button 
              className="mobile-close-btn"
              onClick={onToggle}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '4px',
                marginLeft: 'auto'
              }}
            >
              <FaTimes />
            </button>
          )}
        </div>

        <div className="sidebar-search">
          {isOpen ? (
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <span className="search-shortcut">⌘ K</span>
            </div>
          ) : (
            <div className="menu-item">
              <span className="menu-icon"><FaSearch /></span>
            </div>
          )}
        </div>

        <div className="sidebar-menu">
          {menuItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path} 
              className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
              onClick={isMobile ? onToggle : undefined}
            >
              <span className="menu-icon">{item.icon}</span>
              {isOpen && <span className="menu-text">{item.text}</span>}
            </NavLink>
          ))}
        </div>

        {isOpen && (
          <div className="sidebar-external">
            {externalLinks.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                className="menu-item external"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="menu-icon">{item.icon}</span>
                {isOpen && <span className="menu-text">{item.text}</span>}
              </a>
            ))}
          </div>
        )}

        <div className="sidebar-footer">
          <div className="theme-toggle" onClick={toggleTheme}>
            <span className="menu-icon">{isDark ? <FaSun /> : <FaMoon />}</span>
            {isOpen && <span className="menu-text">Theme</span>}
          </div>
          
          {/* Only show collapse toggle on desktop */}
          {!isMobile && (
            <div className="collapse-toggle" onClick={onToggle}>
              <FaChevronLeft className={`collapse-icon ${isOpen ? '' : 'rotated'}`} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;