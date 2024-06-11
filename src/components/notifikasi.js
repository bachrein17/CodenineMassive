import React from 'react';
import './notifikasi.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const NotificationsPage = () => {
  const latestNotifications = [
    "You have a new comment on your recipe.",
    "Your recipe has been approved.",
    "You received a like on your post."
  ];

  const followerNotifications = [
    "User123 started following you.",
    "User456 started following you.",
    "User789 started following you."
  ];

  const recommendedAccounts = [
    { username: "ChefAnna", bio: "Professional Chef with 10 years of experience.", image: "https://via.placeholder.com/50" },
    { username: "BakeMaster", bio: "Baking enthusiast sharing delicious recipes.", image: "https://via.placeholder.com/50" },
    { username: "HealthyEats", bio: "Nutritionist sharing healthy meal plans.", image: "https://via.placeholder.com/50" }
  ];

  return (
    <div>
      <Navbar />
      <div className="notifications-page">
        <div className="container">
          <h2>Notifications</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="notifications-section">
                <h3>Latest Notifications</h3>
                <ul>
                  {latestNotifications.map((notification, index) => (
                    <li key={index} className="notification-item">{notification}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="notifications-section">
                <h3>Follower Notifications</h3>
                <ul>
                  {followerNotifications.map((notification, index) => (
                    <li key={index} className="notification-item">{notification}</li>
                  ))}
                </ul>
              </div>
              <div className="notifications-section">
                <h3>Recommended Accounts</h3>
                <ul className="recommended-accounts">
                  {recommendedAccounts.map((account, index) => (
                    <li key={index} className="recommended-account">
                      <img src={account.image} alt={`${account.username} profile`} />
                      <div className="account-info">
                        <h4>{account.username}</h4>
                        <p>{account.bio}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationsPage;
