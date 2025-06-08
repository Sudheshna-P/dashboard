import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import ThemeCustomizer from '../ThemeCustomizer/ThemeCustomizer';
import './Header.css';

const Header = ({ onToggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, message: 'New user registered', time: '2 min ago', type: 'info' },
    { id: 2, message: 'Server backup completed', time: '10 min ago', type: 'success' },
    { id: 3, message: 'Payment failed for order #1234', time: '1 hour ago', type: 'error' },
    { id: 4, message: 'Monthly report is ready', time: '2 hours ago', type: 'info' },
  ];

  return (
    <>
      <header className="header">
        <div className="header-left">
          <button className="menu-toggle" onClick={onToggleSidebar}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
          
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="search-input"
            />
          </div>
        </div>
        
        <div className="header-right">
          <button 
            className="header-btn"
            onClick={() => setShowCustomizer(!showCustomizer)}
            title="Customize Theme"
          >
            🎨
          </button>
          
          <button 
            className="header-btn theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <div className="notification-wrapper">
            <button 
              className="header-btn notification-btn"
              onClick={() => setShowNotifications(!showNotifications)}
              title="Notifications"
            >
              🔔
              <span className="notification-badge">4</span>
            </button>
            
            {showNotifications && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3>Notifications</h3>
                  <button className="mark-all-read">Mark all as read</button>
                </div>
                <div className="notification-list">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`notification-item ${notification.type}`}>
                      <div className="notification-content">
                        <p>{notification.message}</p>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="notification-footer">
                  <button className="view-all">View all notifications</button>
                </div>
              </div>
            )}
          </div>
          
          <div className="user-menu">
            <button className="user-avatar">
              <img src="https://via.placeholder.com/32" alt="User" />
            </button>
          </div>
        </div>
      </header>
      
      {showCustomizer && (
        <ThemeCustomizer 
          isOpen={showCustomizer}
          onClose={() => setShowCustomizer(false)}
        />
      )}
    </>
  );
};

export default Header;