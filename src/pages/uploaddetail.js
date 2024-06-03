import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function UploadDetail() {
    const [imageURL, setImageURL] = useState('image/unggahdisini.png');
    const [langkahMasak, setLangkahMasak] = useState(['Langkah 1: Kupas bawang']);
    const [bahanMasakan, setBahanMasakan] = useState([]);
    const [tags, setTags] = useState([]);
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageURL(imageURL);
        }
    };

    const addCaramasak = () => {
        setLangkahMasak([...langkahMasak, '']);
    };

    const removeCaramasak = (index) => {
        const newLangkahMasak = [...langkahMasak];
        newLangkahMasak.splice(index, 1);
        setLangkahMasak(newLangkahMasak);
    };

    const submitRecipe = () => {
        const recipeData = {
            thumbnail: imageURL,
            judul: judul,
            deskripsi: deskripsi,
            langkahMasak: langkahMasak,
            bahanMasakan: bahanMasakan,
            tags: tags
        };
        console.log(recipeData);
    };

    const addBahanMasakan = () => {
        setBahanMasakan([...bahanMasakan, '']);
    };

    const removeBahanMasakan = (index) => {
        const newBahanMasakan = [...bahanMasakan];
        newBahanMasakan.splice(index, 1);
        setBahanMasakan(newBahanMasakan);
    };

    const addTag = (tag) => {
        setTags([...tags, tag]);
    };

    const images = require.context('../image', true);

    return (
        <>
            <Navbar />
            <div className="container">
                <div style={{ paddingLeft: '20px' }}>
                    <a href="/uploadresep">
                        <img src={images('./back.png')} alt="" />
                    </a>
                </div>
                <div style={{ textAlign: 'center', fontSize: '25px', fontWeight: '700' }}>
                    <h2>Bagikan Resep Andalanmu</h2>
                </div>
                <div style={{ padding: '20px', marginTop: '10%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <label htmlFor="fileUpload" style={{ paddingBottom: '20px' }}>
                        <input type="file" id="fileUpload" className="file-input" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                        <img src={images('./unggahdisini.png')} alt="" style={{ width: '500px', height: 'auto', borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', marginRight: '100px', cursor: 'pointer' }} />
                    </label>
                    <form style={{ flex: 1, maxWidth: '400px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label className="form-label" style={{ fontWeight: '650', fontFamily: 'Poppins' }}>Nama Masakanmu</label>
                            <input type="text" className="form-control" placeholder="Ketik nama masakanmu" style={{ width: '100%', border: '1px solid #FF2525', color: '#FF2525', padding: '10px' }} />
                        </div>
                        <div style={{ marginTop: '20px', paddingBottom: '20px' }}>
                            <label className="form-label" style={{ display: 'block', marginBottom: '5px' }}>Penjelasan Resepmu</label>
                            <textarea id="deskripsiResep" className="form-control" placeholder="Deskripsikan cerita menarik tentang resepmu" style={{ width: '100%', height: '150px', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px', resize: 'none' }}></textarea>
                        </div>
                        <label htmlFor="fileUpload2" className="btn btn-primary" style={{ display: 'block', width: 'calc(100% - 30px)', background: 'linear-gradient(to right, red, orange)', border: 'none', fontFamily: 'Poppins', padding: '10px', textAlign: 'center' }}>
                            <input type="file" id="fileUpload2" className="file-input" style={{ display: 'none' }} />
                            <img src={images('./uploadicon.png')} alt="" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                            Unggah foto masakanmu
                        </label>
                    </form>
                </div>
                <div style={{ marginTop: '20px', fontFamily: 'Poppins', fontSize: '24px' }}>
                    <h2>Masukan Rincian Bahan</h2>
                    {bahanMasakan.map((item, index) => (
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} key={index}>
                            <input type="text" className="form-control" placeholder={`Contoh: ${index + 1} sdm Garam`} style={{ flex: 1, width: '50%', marginRight: '50px', border: '1px solid #FF2525', borderRadius: '5px', color: 'red', padding: '10px' }} />
                            <div style={{ paddingLeft: '10px' }}>
                                <img src={images('./tambahdetail.png')} alt="" className="action-button" style={{ cursor: 'pointer' }} onClick={addBahanMasakan} />
                                {index !== 0 && <img src={images('./kurangdetail.png')} alt="Kurang" className="action-button" style={{ cursor: 'pointer', paddingLeft: '10px' }} onClick={() => removeBahanMasakan(index)} />}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dropdown" style={{ display: 'flex', marginTop: '20px' }}>
                    <div className="banyaksaji" style={{ paddingRight: '10px' }}>
                        <h3 style={{ marginTop: '40px', fontFamily: 'Poppins', fontSize: '24px' }}>Banyak Sajian</h3>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: '1px solid red', backgroundColor: 'transparent', color: 'red', width: '100%' }}>
                                Untuk berapa porsi ?
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ border: '1px solid red', backgroundColor: 'transparent' }}>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>1 Porsi</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>2 Porsi</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>3 Porsi</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>4 Porsi</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>5 Porsi</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="waktu" style={{ padding: '0 10px' }}>
                        <h3 style={{ marginTop: '40px', fontFamily: 'Poppins', fontSize: '24px' }}>Waktu Memasak</h3>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: '1px solid red', backgroundColor: 'transparent', color: 'red', width: '100%' }}>
                                Berapa Menit ?
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2" style={{ border: '1px solid red', backgroundColor: 'transparent' }}>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>5 Menit</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>10 Menit</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>15 Menit</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>20 Menit</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'red' }}>25 Menit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '20px', fontFamily: 'Poppins', fontSize: '24px' }}>
                    <h2>Masukan Langkah-langkah Masak</h2>
                    {langkahMasak.map((step, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <input type="text" className="form-control" placeholder={`Langkah ${index + 1}: ...`} style={{ flex: 1, marginRight: '10px', border: '1px solid #FF2525', color: 'red', padding: '10px' }} />
                            <div>
                                <img src={images('./tambahdetail.png')} alt="Tambah" className="action-button" style={{ cursor: 'pointer' }} onClick={addCaramasak} />
                                {index !== 0 && <img src={images('./kurangdetail.png')} alt="Kurang" className="action-button" style={{ cursor: 'pointer', paddingLeft: '10px' }} onClick={() => removeCaramasak(index)} />}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="kategori" style={{ marginTop: '20px', fontFamily: 'Poppins' }}>
                    <h2 style={{ fontSize: '24px' }}>Kategori</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ marginRight: '10px' }}>
                            <input type="checkbox" id="kategori1" />
                            <label htmlFor="kategori1" style={{ paddingLeft: '10px', fontSize: '20px' }}>Nasi</label>
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <input type="checkbox" id="kategori2" />
                            <label htmlFor="kategori2" style={{ paddingLeft: '10px', fontSize: '20px' }}>Ayam</label>
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <input type="checkbox" id="kategori3" />
                            <label htmlFor="kategori3" style={{ paddingLeft: '10px', fontSize: '20px' }}>Daging</label>
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <input type="checkbox" id="kategori4" />
                            <label htmlFor="kategori4" style={{ paddingLeft: '10px', fontSize: '20px' }}>Sayuran</label>
                        </div>
                    </div>
                </div>
                <div className="tag" style={{ marginTop: '20px', fontFamily: 'Poppins', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px' }}>Tag</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {['Pedas', 'Manis', 'Gurih', 'Asin'].map((tag, index) => (
                            <button key={index} style={{ border: '1px solid #FF2525', color: '#FF2525', borderRadius: '20px', padding: '10px 20px', fontSize: '20px', margin: '5px' }} onClick={() => addTag(tag)}>
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                <button className="btn btn-primary" onClick={submitRecipe} style={{ display: 'block', width: 'calc(100% - 30px)', background: 'linear-gradient(to right, red, orange)', border: 'none', fontFamily: 'Poppins', padding: '10px', textAlign: 'center', marginBottom: '20px' }}>
                    Bagikan Resep
                </button>
            </div>
            <Footer />
        </>
    );
}

export default UploadDetail;
