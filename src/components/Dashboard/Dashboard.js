import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12%',
      trend: 'up',
      icon: '👥',
      color: 'blue'
    },
    {
      title: 'Revenue',
      value: '$98,765',
      change: '+8%',
      trend: 'up',
      icon: '💰',
      color: 'green'
    },
    {
      title: 'Orders',
      value: '2,456',
      change: '-3%',
      trend: 'down',
      icon: '📦',
      color: 'orange'
    },
    {
      title: 'Conversion',
      value: '3.2%',
      change: '+0.5%',
      trend: 'up',
      icon: '📈',
      color: 'purple'
    }
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Created new project', time: '2 mins ago', avatar: '👤' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '5 mins ago', avatar: '👩' },
    { id: 3, user: 'Mike Johnson', action: 'Completed task', time: '10 mins ago', avatar: '👨' },
    { id: 4, user: 'Sarah Wilson', action: 'Left a comment', time: '15 mins ago', avatar: '👩‍💼' },
    { id: 5, user: 'Tom Brown', action: 'Uploaded file', time: '20 mins ago', avatar: '👨‍💻' }
  ];

  const topProjects = [
    { name: 'E-commerce Platform', progress: 85, status: 'On Track', color: 'green' },
    { name: 'Mobile App Redesign', progress: 60, status: 'In Progress', color: 'blue' },
    { name: 'Data Analytics Tool', progress: 30, status: 'Behind', color: 'orange' },
    { name: 'Marketing Campaign', progress: 95, status: 'Almost Done', color: 'purple' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening with your projects today.</p>
        </div>
        <button className="btn btn-primary">
          <span>📊</span>
          Generate Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">
              <span>{stat.icon}</span>
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-title">{stat.title}</div>
              <div className={`stat-change ${stat.trend}`}>
                <span className="change-indicator">
                  {stat.trend === 'up' ? '↗️' : '↘️'}
                </span>
                {stat.change} from last month
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        {/* Recent Activity */}
        <div className="dashboard-card activity-card">
          <div className="card-header">
            <h3>Recent Activity</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-avatar">{activity.avatar}</div>
                <div className="activity-content">
                  <div className="activity-text">
                    <strong>{activity.user}</strong> {activity.action}
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Projects */}
        <div className="dashboard-card projects-card">
          <div className="card-header">
            <h3>Top Projects</h3>
            <button className="view-all-btn">Manage</button>
          </div>
          <div className="projects-list">
            {topProjects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-info">
                  <div className="project-name">{project.name}</div>
                  <div className={`project-status ${project.color}`}>
                    {project.status}
                  </div>
                </div>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div 
                      className={`progress-fill ${project.color}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card quick-actions-card">
          <div className="card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions">
            <button className="quick-action-btn">
              <span className="action-icon">➕</span>
              <span className="action-text">New Project</span>
            </button>
            <button className="quick-action-btn">
              <span className="action-icon">👥</span>
              <span className="action-text">Add User</span>
            </button>
            <button className="quick-action-btn">
              <span className="action-icon">📄</span>
              <span className="action-text">Create Report</span>
            </button>
            <button className="quick-action-btn">
              <span className="action-icon">⚙️</span>
              <span className="action-text">Settings</span>
            </button>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="dashboard-card chart-card">
          <div className="card-header">
            <h3>Performance Overview</h3>
            <select className="chart-filter">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="chart-placeholder">
            <div className="chart-bars">
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '80%'}}></div>
              <div className="chart-bar" style={{height: '45%'}}></div>
              <div className="chart-bar" style={{height: '90%'}}></div>
              <div className="chart-bar" style={{height: '70%'}}></div>
              <div className="chart-bar" style={{height: '85%'}}></div>
              <div className="chart-bar" style={{height: '65%'}}></div>
            </div>
            <div className="chart-labels">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;