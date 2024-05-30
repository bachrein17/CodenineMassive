import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipeCard = ({ image, title, publisher, description }) => {
  return (
    <div className="carousel-item active">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-7">
            <img src={image} className="card-img" alt="Thumbnail" />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Publisher: {publisher}</p>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-primary">Lihat Resep</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;