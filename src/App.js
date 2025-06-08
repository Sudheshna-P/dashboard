import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Tables from './components/Tables/Tables';
import Charts from './components/Charts/Charts';
import Calendar from './components/Calendar/Calendar';
import Kanban from './components/Kanban/Kanban';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'tables':
        return <Tables />;
      case 'charts':
        return <Charts />;
      case 'calendar':
        return <Calendar />;
      case 'kanban':
        return <Kanban />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Header 
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          />
          <div className="content">
            {renderContent()}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;