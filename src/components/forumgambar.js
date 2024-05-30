import React from 'react';

const ForumCardWithImage = ({ image, title, description, uploadedTime, profileImage, profileName, profileRole, likeCount, viewCount, commentCount }) => {
  const likeClicked = (elementId) => {
    const likeCountElement = document.getElementById(elementId);
    const currentLikeCount = parseInt(likeCountElement.innerText);
    if (likeCountElement.classList.contains('liked')) {
      likeCountElement.innerText = currentLikeCount - 1;
      likeCountElement.classList.remove('liked');
    } else {
      likeCountElement.innerText = currentLikeCount + 1;
      likeCountElement.classList.add('liked');
    }
  };

  const viewClicked = () => {
    // Redirect to another page for viewing the full post
    window.location.href = '/fullpost'; // Change the URL as needed
  };

  const commentClicked = () => {
    // Redirect to another page for commenting on the post
    window.location.href = '/comments'; // Change the URL as needed
  };

  return (
    <div className="col">
      {/* Forum card content */}
      <div className="card">
        <div className="card-header" style={{ backgroundColor: 'transparent', border: 'none' }}>
          <div className="row">
            <div className="col-md-4">
              <img src={image} className="card-img" alt="Left Image" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="lastupdate">Diunggah {uploadedTime} yang lalu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body profile-info">
          <img src={profileImage} className="rounded-circle" alt="Profile Photo" />
          <div className="profileakun">
            <p className="mb-0" style={{ marginLeft: '10px' }}>{profileName}</p>
            <small className="text-muted">{profileRole}</small>
          </div>
          <div className="ms-auto">
            <span className="border-custom">
              <button onClick={() => likeClicked(likeCount)}>
                <img src="image/like.png" alt="" style={{ width: '15px', height: '12px' }} /><span id={likeCount}>10</span>
              </button>
            </span>
            <button className="border-custom" onClick={viewClicked}>
              <img src="image/view.png" alt="" style={{ width: '15px', height: '12px' }} />{viewCount}
            </button>
            <button className="border-custom" onClick={commentClicked}>
              <img src="image/comment.png" alt="" style={{ width: '14px', height: '12px' }} />{commentCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCardWithImage;