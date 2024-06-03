import React from 'react';

function SuccessPage({ thumbnail, judul, publisher, deskripsi }) {
    return (
        <div>
            <div className="heading">
                <h2>Resep Anda Berhasil Dibuat!</h2>
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
                            <a href="#ulasan" className="btn btn-light" style={{ color: '#ff2525', borderRadius: '25px' }}>Lihat Resep Anda</a>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="tradisirasafooter">
                        <h3>Tradisi Rasa</h3>
                        <div className="deskripsi">
                            <img src="image/logo-footer.png" alt="Logo Tradisi Rasa" />
                            <p className="text-break">Bergabunglah dalam perjalanan memasak yang memperkaya di forum kami, di mana resep-resep terbaik bermuara pada satu cita rasa: tradisional.</p>
                        </div>
                    </div>
                    <div className="sitemap">
                        <h3>Site Map</h3>
                        <div className="sitemapk">
                            <ul className="nostyle">
                                <li><a href="#">Favorit</a></li>
                                <li><a href="forum.html">Forum</a></li>
                            </ul>
                            <ul className="ul2">
                                <li><a href="#">Resep</a></li>
                                <li><a href="#">Unggah Resep</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="socmed">
                        <h3>Social Media</h3>
                        <ul className="nostyle">
                            <li>
                                <a href="#"> <img src="image/facebookicon.png" alt="Facebook Icon" />Tradisi Rasa</a>
                            </li>
                            <li>
                                <a href="#"> <img src="image/igicon.png" alt="Instagram Icon" />Tradisi.Rasa</a>
                            </li>
                            <li>
                                <a href="#"><img src="image/youtubeicon.png" alt="Youtube Icon" />Tradisi Rasa</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer className="footer2">
                <p>All Right Reserved</p>
            </footer>
        </div>
    );
}

export default SuccessPage;
