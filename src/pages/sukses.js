import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function SuccessPage({ thumbnail, judul, publisher, deskripsi }) {
    return (
        <div>
            <Navbar />
            <div className="heading">
                <h2 style={{textAlign:'center', margin: '0'}}>Resep Anda Berhasil Dibuat!</h2>
                <p style={{ textAlign: 'center', margin: '0' }}>Karya Kuliner Anda Siap Terbagikan: jelajahi kelezatan dunia rasa tanpa batas.</p>
                <p style={{ textAlign: 'center', margin: '0' }}>Jadilah inspirasi kuliner bagi orang lain dan temukan petualangan baru dalam setiap hidangan!</p>
            </div>

            <div className="container d-flex justify-content-center" style={{ paddingTop: '35px', paddingBottom: '5rem' }}>
                <div className="card" style={{ width: '48rem', padding: '35px', paddingBottom: '5px', borderRadius: '35px', background: 'linear-gradient(to top right, red 5%, orange)' }}>
                    <img src={thumbnail} className="card-img-top" style={{ borderRadius: '40px' }} alt={judul} />
                    <div className="card-body">
                        <h5 className="card-title">{judul}</h5>
                        <p>Publisher: {publisher}</p>
                        <p className="card-text" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                            {deskripsi}
                        </p>
                        <div className="text-center">
                            <a href="/detailresep" className="btn btn-light" style={{ color: '#ff2525', borderRadius: '25px' }}>Lihat Resep Anda</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SuccessPage;
