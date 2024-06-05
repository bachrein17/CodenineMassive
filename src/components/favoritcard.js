import React from 'react';
import './favoritcard.css';

const CardFavorit = ({ image, porsi, waktu, title, publisher, onDelete }) => {
    const images = require.context('../image', true);

    return (
        <div className="card-favorit" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className="card" style={{ borderRadius: '25px', borderColor: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', marginTop: '50px', margin: '35px', position: 'relative' }}>
                <div className="image-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                    <img src={images(image)} alt="" style={{ paddingTop: '14px', paddingLeft: '15px', paddingRight: '15px', borderRadius: '35px', maxWidth: '250px', maxHeight: '300px', justifyContent: 'center' }} />
                    <div className="delete-icon" onClick={onDelete} style={{ position: 'absolute', top: '15px', right: '15px' }}>
                        <img src={images('./likefavorit.png')} alt="Delete" style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>
                <div className="card-body">
                    <div className="tagf" style={{ display: 'flex' }}>
                        <span className="border-customf" style={{ fontWeight: '600', fontStyle: 'normal', fontSize: '12px', color: 'red', padding: '5px 15px', borderRadius: '15px' }}>
                            <img src={images('./porsi.png')} alt="" style={{ width: '17px', height: '15px', marginRight: '10px' }} />{porsi}
                        </span>
                        <span className="border-customf" style={{ fontWeight: '600', fontStyle: 'normal', fontSize: '12px', color: 'red', padding: '5px 15px', borderRadius: '15px' }}>
                            <img src={images('./waktu.png')} alt="" style={{ width: '17px', height: '17px', marginRight: '10px' }} />{waktu}
                        </span>
                    </div>
                    <p className="card-text" style={{ paddingTop: '7px', fontWeight: '600', fontStyle: 'normal', fontSize: '14px', color: 'red' }}>{title}</p>
                    <p className="card-deskripsi" style={{ fontWeight: '400', fontStyle: 'normal', fontSize: '12px', color: 'red' }}>Publisher : {publisher}</p>
                </div>
            </div>
        </div>
    );
};

export default CardFavorit;
