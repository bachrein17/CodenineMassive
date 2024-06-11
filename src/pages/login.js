import React from 'react';
import '../styles/login.css';

import loginawal from '../image/loginawal.png';
import googleIcon from '../image/google.png';
import facebookIcon from '../image/facebook.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            rememberMeChecked: false
        };
    }

    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }));
    };

    handleRememberMeChange = () => {
        this.setState(prevState => ({
            rememberMeChecked: !prevState.rememberMeChecked
        }));
    };

    render() {
        return (
            <section className="halogin">
                <div className="imgbx">
                    {/* Menggunakan path gambar yang sudah diimpor */}
                    <img src={loginawal} alt="" />
                </div>
                <div className="contentbx">
                    <div className="formbx">
                        <h2>Login</h2>
                        <p>Selamat Datang Kembali! Silahkan Masuk Kembali</p>
                        <form>
                            <div className="inputbx">
                                <span>Username</span>
                                <input type="text" placeholder="Masukan Username atau Email" required />
                            </div>
                            <div className="inputbx">
                                <span>Password</span>
                                <input
                                    type={this.state.showPassword ? "text" : "password"}
                                    id="passwordInput"
                                    placeholder="Masukan Password"
                                    required
                                />
                                <span className="show-password" onClick={this.togglePasswordVisibility}>
                                    {this.state.showPassword ? "Hide" : "Show"}
                                </span>
                            </div>
                            <div className="remember-forgot">
                                <div className="remember">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        checked={this.state.rememberMeChecked}
                                        onChange={this.handleRememberMeChange}
                                        style={{
                                            borderColor: 'red',
                                            borderRadius: '5px',
                                            backgroundColor: this.state.rememberMeChecked ? 'red' : 'transparent'
                                        }}
                                    />
                                    <label htmlFor="remember">Ingat Saya!</label>
                                </div>
                                <div className="forgot-password">
                                    <a href="#">Lupa Password</a>
                                </div>
                            </div>
                            <div className="inputbx">
                                <a href="/" className="signin">
                                    Login
                                </a>
                            </div>
                        </form>
                        <ul className="sci">
                            <li>
                                {/* Menggunakan path gambar yang sudah diimpor */}
                                <img src={googleIcon} alt="" />
                            </li>
                            <li>
                                {/* Menggunakan path gambar yang sudah diimpor */}
                                <img src={facebookIcon} alt="" />
                            </li>
                        </ul>
                        <div className="inputbx" style={{ textAlign: 'center', paddingTop: '30px' }}>
                            <p>
                                Belum punya akun? <a href="signup">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;
