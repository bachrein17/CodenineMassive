import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/uploadresep.css';

function closeNavbar() {
    var navbar = document.getElementById('navbarNav');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    }
}

function UploadResep() {
    return (
        <div>
            <Navbar />
            <div className="heading">
                <h2>Unggah Resepmu, Wujudkan Inspirasi Kuliner Bersama</h2>
            </div>

            <div className="container">
                <div className="upload d-none d-md-block">
                    <img src="image/gambardetailresep.png" alt="upload resep" />
                </div>
                <div className="datauser">
                    <p>Hi! User</p>
                    <br />
                    <form>
                        <div className="mb-4">
                            <label htmlFor="exampleInputNama" className="form-label">Nama Penerbit</label>
                            <input type="text" className="form-control" id="exampleInputNama" placeholder="Publisher" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputInstagram" className="form-label">Akun Instagram</label>
                            <input type="text" className="form-control" id="exampleInputInstagram" placeholder="@Instagram" />
                        </div>
                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Ingat Saya!</label>
                        </div>
                        <br />
                        <a href="/uploaddetail" className="btn btn-primary">Lanjutkan</a>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UploadResep;
