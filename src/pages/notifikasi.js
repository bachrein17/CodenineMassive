import React from 'react';
import '../styles/notifikasi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LatestNotifications from '../components/notifterbaru';
import FollowerNotifications from '../components/notifpengguna';
import RecommendedAccounts from '../components/rekomendasiakun';

const images = require.context('../image', true);

const NotificationsPage = () => {
  const latestNotifications = [
    { message: "You have a new comment on your recipe.", image: images('./artikel-1.png') },
    { message: "Your recipe has been approved.", image: "https://via.placeholder.com/50" },
    { message: "You received a like on your post.", image: "https://via.placeholder.com/50" }
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
              <LatestNotifications notifications={latestNotifications} />
            </div>
            <div className="col-md-6">
              <FollowerNotifications notifications={followerNotifications} />
              <RecommendedAccounts accounts={recommendedAccounts} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationsPage;
