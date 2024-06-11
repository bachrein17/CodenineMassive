import React from 'react';

const LatestNotifications = ({ notifications, images, accounts }) => {
  return (
    <div className="notifications-section">
      <h3>Latest Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <li className="notification-item">
              <div className="notification-content">
                <div className="notification-image">
                  <img src={images[index]} alt="Notification" />
                </div>
                <div className="notification-text">
                  <p>{notification}</p>
                  <p>{accounts[index]}</p>
                </div>
              </div>
            </li>
            <div className="redline" />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default LatestNotifications;
