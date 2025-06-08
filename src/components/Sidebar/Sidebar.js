import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab, isOpen, onToggle }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'tables', label: 'Tables', icon: '📋' },
    { id: 'charts', label: 'Charts', icon: '📈' },
    { id: 'calendar', label: 'Calendar', icon: '📅' },
    { id: 'kanban', label: 'Kanban', icon: '📝' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon"></span>
          {isOpen && <span className="logo-text">AdminDASH</span>}
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
                title={!isOpen ? item.label : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                {isOpen && <span className="nav-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">👤</div>
          {isOpen && (
            <div className="user-details">
              <div className="user-name">John Doe</div>
              <div className="user-role">Administrator</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;