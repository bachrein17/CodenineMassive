import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ForumCardPage from '../components/forumcardpage';
import ForumCardTanpaGambar from '../components/forumcardtanpagambar';

const images = require.context('../image', true);


class Forum extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container mt-5 py-2">
                    <header className="container-fluid banner">
                        <div className="row align-items-center">
                            <h1 className="Text-Judul" style={{ textAlign: 'center', fontWeight: '600', wordWrap: 'break-word' }}>Forum Diskusi</h1>
                            <p className="p-Judul m-0 px-3 py-2" style={{ textAlign: 'center' }}>Berbagi Pengetahuan, Inspirasi, dan Kreativitas Kuliner!</p>
                        </div>
                    </header>
                </div>

                <section>
                    <div className="search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', margin: '0 auto', border: '3px solid #ccc', borderRadius: '10px', paddingTop: '8px', paddingBottom: '8px' }}>
                        <input type="text" style={{ border: 'none', outline: 'none', width: '100%' }} placeholder="Mulai Diskusimu!!" />
                        <i className="las la-paper-plane"></i>
                    </div>
                </section>

                <section className="forum" id="forum">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ForumCardPage
                                    image={images('./forum-1.png')}
                                    title="Tiap tahun saya selalu buat nastar, tapi kok nastar saya selalu keras kayak batu ya?"
                                    tags={['Nastar', 'Tips', 'Kue Kering', 'Makanan Hari Raya']}
                                    uploadedTime="2 Jam"
                                    profileImage={images('./profilakun1.png')}
                                    profileName="John Doe"
                                    profileRole="Developer"
                                    likeCount="likeCount1"
                                    viewCount="viewCount1"
                                    commentCount="commentCount1"
                                />
                            </div>
                            <div className="col-lg-6">
                                <ForumCardPage
                                    image={images('./forum-1.png')}
                                    title="Alhamdulillah, kemarin saya nyoba2 buat catering menu buka puasa, eh banyak yang order, senangnyaa..."
                                    tags={['Menu Makanan Malam', 'Rendang', 'Nasi Goreng', 'Catering']}
                                    uploadedTime="2 Jam"
                                    profileImage={images('./profilakun1.png')}
                                    profileName="John Doe"
                                    profileRole="Developer"
                                    likeCount="likeCount2"
                                    viewCount="viewCount1"
                                    commentCount="commentCount1"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ForumCardTanpaGambar
                                    title="Judul Forum"
                                    tags={['Tag1', 'Tag2', 'Tag3']}
                                    uploadedTime="2 jam yang lalu"
                                    profileImage={images('./forum-1.png')}
                                    profileName="Nama Profil"
                                    profileRole="Peran Profil"
                                    likeCount="likeCount3"
                                    viewCount="viewCount3"
                                    commentCount="commentCount3"
                                />
                            </div>
                            <div className="col-lg-6">
                                <ForumCardTanpaGambar
                                    title="Judul Forum"
                                    tags={['Tag1', 'Tag2', 'Tag3']}
                                    uploadedTime="2 jam yang lalu"
                                    profileImage={images('./forum-1.png')}
                                    profileName="Nama Profil"
                                    profileRole="Peran Profil"
                                    likeCount="likeCount4"
                                    viewCount="viewCount4"
                                    commentCount="commentCount4"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default Forum;
