import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import gambardetailresep from '../image/gambardetailresep.png';

function UploadResep() {
    const [publisher, setPublisher] = useState('');
    const [instagram, setInstagram] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('publisher', publisher); // Simpan ke localStorage
        localStorage.setItem('instagram', instagram); // Simpan ke localStorage
        window.location.href = '/uploaddetail'; // Pindah ke halaman UploadDetail
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <Navbar />
            <div className="heading">
                <h2 style={{ textAlign: 'center', fontSize: '26px', paddingTop: '4%', paddingBottom: '1%', flexWrap: 'wrap' }}>
                    Unggah Resepmu, Wujudkan Inspirasi Kuliner Bersama
                </h2>
            </div>

            <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="uploadawal d-none d-md-block" style={{ flex: 1, paddingBottom: '8%' }}>
                    <img src={gambardetailresep} alt="upload resep" style={{
                        display: 'flex',
                        maxWidth: '800px',
                        maxHeight: '400px',
                        marginLeft: 'auto',
                        borderRadius: '25px'
                    }} />
                </div>
                <div className="datauser" style={{ flex: 'auto', marginLeft: '20px', fontSize: '18px' }}>
                    <p>Hi! User</p>
                    <br />
                    <form onSubmit={handleSubmit} style={{ paddingBottom: '50px' }}>
                        <div className="mb-4">
                            <label htmlFor="exampleInputNama" className="form-label" style={{ fontWeight: '400' }}>Nama Penerbit</label>
                            <input type="text" className="form-control" id="exampleInputNama" placeholder="Publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} style={{
                                border: '2px solid #FF2525',
                                color: '#FF2525'
                            }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputInstagram" className="form-label" style={{ fontWeight: '400' }}>Akun Instagram</label>
                            <input type="text" className="form-control" id="exampleInputInstagram" placeholder="@Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} style={{
                                border: '2px solid #FF2525',
                                color: '#FF2525'
                            }} />
                        </div>
                        <div className="mb-4 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                style={{
                                    borderColor: 'red',
                                    borderRadius: '5px',
                                    backgroundColor: isChecked ? 'red' : 'transparent'
                                }}
                                id="exampleCheck1"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Ingat Saya!</label>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" style={{
                            backgroundImage: 'linear-gradient(to right, red, orange)',
                            color: '#fff',
                            width: '100%',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            marginTop: '10px'
                        }}>
                            Lanjutkan
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UploadResep;
