import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeCustomizer.css';

const ThemeCustomizer = ({ isOpen, onClose }) => {
  const { theme, accentColor, toggleTheme, changeAccentColor } = useTheme();

  const colorOptions = [
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Sky', value: '#0ea5e9' },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="customizer-overlay" onClick={onClose}></div>
      <div className="theme-customizer">
        <div className="customizer-header">
          <h3>Theme Customizer</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="customizer-content">
          <div className="customizer-section">
            <h4>Theme Mode</h4>
            <div className="theme-options">
              <button 
                className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                onClick={() => theme !== 'light' && toggleTheme()}
              >
                <div className="theme-preview light-preview">
                  <div className="preview-header"></div>
                  <div className="preview-sidebar"></div>
                  <div className="preview-content"></div>
                </div>
                <span>Light</span>
              </button>
              
              <button 
                className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => theme !== 'dark' && toggleTheme()}
              >
                <div className="theme-preview dark-preview">
                  <div className="preview-header"></div>
                  <div className="preview-sidebar"></div>
                  <div className="preview-content"></div>
                </div>
                <span>Dark</span>
              </button>
            </div>
          </div>
          
          <div className="customizer-section">
            <h4>Accent Color</h4>
            <div className="color-grid">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  className={`color-option ${accentColor === color.value ? 'active' : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => changeAccentColor(color.value)}
                  title={color.name}
                >
                  {accentColor === color.value && <span className="check">✓</span>}
                </button>
              ))}
            </div>
          </div>
          
          <div className="customizer-section">
            <h4>Preview</h4>
            <div className="preview-components">
              <button className="btn btn-primary">Primary Button</button>
              <div className="preview-card">
                <div className="card-header">Card Title</div>
                <div className="card-content">Sample card content with current theme.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeCustomizer;