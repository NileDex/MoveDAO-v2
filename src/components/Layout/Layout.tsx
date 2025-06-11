import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';
import TopNavbar from '../TopNavbar';
import MainContent from '../MainContent';
import { useTheme } from '../../context/ThemeContext';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { isDark } = useTheme();

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Close sidebar by default on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <div className="layout">
          <Sidebar 
            isOpen={sidebarOpen} 
            onToggle={toggleSidebar} 
            isMobile={isMobile}
          />
          
          <div className={`main-container ${sidebarOpen && !isMobile ? 'sidebar-open' : 'sidebar-closed'}`}>
            <TopNavbar 
              onMenuClick={toggleSidebar}
              isMobile={isMobile}
            />
            <MainContent />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;