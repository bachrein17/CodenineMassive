import React from 'react';

const ArticleCard = ({ image, title }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="Article Thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;