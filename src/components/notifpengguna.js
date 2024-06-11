import React from 'react';

const FollowerNotifications = ({ notifications }) => {
  return (
    <div className="notifications-section">
      <h3>Follower Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <li className="notification-item">{notification}</li>
            {index !== notifications.length - 1 && <div className="redline" />} {/* Tambahkan garis merah jika bukan notifikasi terakhir */}
          </React.Fragment>
        ))}
        <div className="redline" /> 
      </ul>
    </div>
  );
};

export default FollowerNotifications;
