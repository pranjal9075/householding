import { useState } from 'react';
import './AdminHeader.css';

const AdminHeader = () => {
  const [notifications] = useState([
    { id: 1, type: 'booking', message: 'New booking received' },
    { id: 2, type: 'technician', message: 'New technician registered' },
    { id: 3, type: 'payment', message: 'Payment issue reported' }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="admin-header ">
      <div className="company-name">
        <h1>Repair Bazar</h1>
      </div>
      
      <div className="header-actions">
        <div className="notifications">
          <button 
            className="notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            🔔 {notifications.length > 0 && <span className="badge">{notifications.length}</span>}
          </button>
          
          {showNotifications && (
            <div className="notification-dropdown">
              {notifications.map(notif => (
                <div key={notif.id} className="notification-item">
                  {notif.message}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="admin-profile">
          <span>Admin Name</span>
          <div className="profile-pic">👤</div>
        </div>
        
        <button className="logout-btn" onClick={() => console.log('Logout')}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;