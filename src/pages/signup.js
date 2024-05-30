import React from 'react';
import '../styles/signup.css';

import loginawal from '../image/loginawal.png';
import googleIcon from '../image/google.png';
import facebookIcon from '../image/facebook.png';

class Signup extends React.Component {
    render() {
        return (
            <section className="halogin">
                <div className="imgbx">
                    <img src={loginawal} alt="" />
                </div>
                <div className="contentbx">
                    <div className="formbx">
                        <h2>Sign Up</h2>
                        <p>Silahkan Isi kolom dibawah untuk mendaftar</p>
                        <form action="http://localhost:3000/signup" method="post">
                            <div className="inputbx">
                                <span>Nama Lengkap</span>
                                <input type="text" name="namaLengkap" placeholder="Masukan Nama Lengkap" required />
                            </div>
                            <div className="inputbx">
                                <span>Email</span>
                                <input type="email" name="email" placeholder="Masukan Email" required />
                            </div>
                            <div className="inputbx">
                                <p style={{ textAlign: 'left', marginBottom: '10px', marginRight: '10px' }}>Role</p>
                                <div className="checkbox-options">
                                    <div className="form-check">
                                        <input type="radio" id="kokiRole" name="role" value="koki" required />
                                        <label htmlFor="kokiRole" className="form-check-label">Koki</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="umkmRole" name="role" value="umkm" required />
                                        <label htmlFor="umkmRole" className="form-check-label">UMKM</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="ibuRumahTanggaRole" name="role" value="ibuRumahTangga" required />
                                        <label htmlFor="ibuRumahTanggaRole" className="form-check-label">Ibu Rumah Tangga</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="lainnyaRole" name="role" value="lainnya" required />
                                        <label htmlFor="lainnyaRole" className="form-check-label">Lainnya</label>
                                    </div>
                                </div>
                            </div>
                            <div className="inputbx">
                                <span>Password</span>
                                <input type="password" name="password" id="passwordInput" placeholder="Masukan Password" required />
                            </div>
                            <div className="inputbx text-center" style={{ paddingTop: '20px' }}>
                                <button type="submit" className="btn btn-primary btn-custom">Sign Up</button>
                            </div>
                        </form>
                        <ul className="sci">
                            <li><img src={googleIcon} alt="Google" /></li>
                            <li><img src={facebookIcon} alt="Facebook" /></li>
                        </ul>
                        <div className="inputbx" style={{ textAlign: 'center', paddingTop: '30px' }}>
                            <p>Sudah punya akun? <a href="/login">Sign In</a></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup;
