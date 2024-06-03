import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ForumCardWithImage from '../components/forumgambar';
import ForumCardWithoutImage from '../components/forumtanpagambar';

const images = require.context('../image', true);

class Forum extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container mt-5 py-2">
                    <header className="container-fluid banner">
                        <div className="row align-items-center">
                            <h1 className="Text-Judul" style={{textAlign:'center',fontWeight:'600',wordWrap:'break-word'}}>Forum Diskusi</h1>
                            <p className="p-Judul m-0 px-3 py-2" style={{textAlign:'center'}}>Berbagi Pengetahuan, Inspirasi, dan Kreativitas Kuliner!</p>
                        </div>
                    </header>
                </div>

                <section>
                    <div className="search-container" style={{display:'flex',justifyContent:'center', alignItems:'center', width:'50%', margin:'0 auto', border:'3px solid #ccc', borderRadius:'10px', paddingTop:'8px', paddingBottom:'8px'}}>
                        <input type="text" style={{border:'none', outline:'none', width:'100%'}} placeholder="Mulai Diskusimu!!" />
                        <i className="las la-paper-plane"></i>
                    </div>
                </section>

                <section className="forum" id="forum">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                {[
                                    <ForumCardWithImage
                                        image={images('./forum-1.png')}
                                        title="Sosis untuk bakar bakaran"
                                        description="Sosis yang enak, lezat, krenyes krenyes, dan gurih enak buat bakaran apa ya bunn? Sama bumbu yang enak buat bakar bakaran apa yachhhh? Soalnya kan mau tahun baru nichhh"
                                        uploadedTime="Diunggah 5 menit yang lalu"
                                        profileImage={images('./profilakun1.png')}
                                        profileName="Bunda Lesty"
                                        profileRole="Ibu Rumah Tangga"
                                        likeCount="likeCount1"
                                        viewCount="viewCount1"
                                        commentCount="commentCount1"
                                    />
                                ]}
                            </div>
                            <div className="col-lg-4">
                                {[
                                    <ForumCardWithImage
                                        image={images('./forum-2.png')}
                                        title="Saran resep masakan autentik"
                                        description="Saya ingin memasak hidangan tradisional autentik untuk momen istimewa dengan keluarga, tetapi saya bingung memilih resep dan bumbu yang tepat. Ada saran untuk hidangan tradisional yang bisa saya coba....."
                                        uploadedTime="5"
                                        profileImage={images('./profilakun2.png')}
                                        profileName="Mami Indah"
                                        profileRole="Ibu Rumah Tangga"
                                        likeCount="likeCount2"
                                        viewCount="viewCount2"
                                        commentCount="commentCount2"
                                    />
                                ]}
                            </div>
                            <div className="col-lg-4">
                                {[
                                    <ForumCardWithoutImage
                                        title="Menu Hari Lebaran: Rendang Medium Rare"
                                        description="Saya memasak rendang untuk menu lebaran, baiknya saya presto dahulu atau saya buat medium rare?"
                                        uploadedTime="Diunggah 30 menit yang lalu"
                                        profileImage={images('./profilakun3.png')}
                                        profileName="Ibu Septi"
                                        profileRole="Ibu Rumah Tangga"
                                        likeCount="likeCount3"
                                        viewCount="viewCount3"
                                        commentCount="commentCount3"
                                    />
                                ]}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                {[
                                    <ForumCardWithoutImage
                                        title="Bagaimana tips Memasak"
                                        description="Saya hanya punya panci 32 inc, tapi mau buat kepala kerbau, apakah itu bisa?"
                                        uploadedTime="12"
                                        profileImage={images('./profilakun4.png')}
                                        profileName="Hendriyatno"
                                        profileRole="Mahasiswa 2 Digit"
                                        likeCount="likeCount4"
                                        viewCount="viewCount4"
                                        commentCount="commentCount4"
                                    />
                                ]}
                            </div>
                            {/* Add more columns and cards here for additional content */}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default Forum;
