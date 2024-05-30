import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/uploaddetail.css';

function UploadDetail() {
    const [imageURL, setImageURL] = useState('image/unggahdisini.png');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const imageURL = URL.createObjectURL(file);
        setImageURL(imageURL);
    };

    const addCaramasak = () => {
        // Lakukan logika untuk menambahkan langkah masak di sini
        console.log('Menambah langkah masak');
    };

    const removeCaramasak = () => {
        // Lakukan logika untuk menghapus langkah masak di sini
        console.log('Menghapus langkah masak');
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="upload">
                    <label htmlFor="fileUpload" style={{ paddingBottom: '20px' }}>
                        <input type="file" id="fileUpload" className="file-input" accept="image/*" onChange={handleImageUpload} />
                        <img id="gambarDetailResep" src={imageURL} alt="upload resep" />
                    </label>
                    <form>
                        <div className="nmasakan">
                            <label className="form-label">Nama Masakanmu</label>
                            <input type="text" className="nama-resep" placeholder="Ketik nama masakanmu" />
                        </div>
                        <div className="penjelasan">
                            <label className="form-label">Penjelasan Resepmu</label>
                            <textarea id="deskripsiResep" className="deskripsi-resep" placeholder="Deskripsikan cerita menarik tentang resepmu"></textarea>
                        </div>
                        <label htmlFor="fileUpload2" className="btn btn-primary">
                            <input type="file" id="fileUpload2" className="file-input" />
                            <img src="image/uploadicon.png" alt="Upload Icon" className="button-icon" />
                            Unggah foto masakanmu
                        </label>
                    </form>
                </div>

                {/* Rincian Bahan */}
                <div className="rincian">
                    <h2>Masukan Rincian Bahan</h2>
                    <div className="bahan">
                        <input type="text" className="bahannya" placeholder="Contoh: 2sdm Garam" />
                        <div className="img-container">
                            <img src="image/tambahdetail.png" alt="Tambah" className="action-button" onClick={addCaramasak} />
                            <img src="image/kurangdetail.png" alt="Kurang" className="action-button" onClick={removeCaramasak} />
                        </div>
                    </div>
                </div>

                {/* Dropdown untuk Banyak Sajian */}
                <div className="dropdown">
                    <div className="banyaksaji">
                        <h3>Banyak Sajian</h3>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Untuk berapa porsi ?
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">1 Porsi</a></li>
                                <li><a className="dropdown-item" href="#">2 Porsi</a></li>
                                <li><a className="dropdown-item" href="#">3 Porsi</a></li>
                                <li><a className="dropdown-item" href="#">4 Porsi</a></li>
                                <li><a className="dropdown-item" href="#">5 Porsi</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Dropdown untuk Waktu Memasak */}
                    <div className="waktu">
                        <h3>Waktu Memasak</h3>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                Berapa Menit ?
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item" href="#">5 Menit</a></li>
                                <li><a className="dropdown-item" href="#">10 Menit </a></li>
                                <li><a className="dropdown-item" href="#">20 Menit</a></li>
                                <li><a className="dropdown-item" href="#">30 Menit</a></li>
                                <li><a className="dropdown-item" href="#">40 Menit</a></li>
                                <li><a className="dropdown-item" href="#">60 Menit</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Dropdown untuk Kategori */}
                    <div className="kategori">
                        <h3>Kategori</h3>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                Kategori makanan
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                <li><a className="dropdown-item" href="#">Camilan</a></li>
                                <li><a className="dropdown-item" href="#">Takjil</a></li>
                                <li><a className="dropdown-item" href="#">Makan Malam</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Langkah-langkah Memasak */}
                <div className="caramasak">
                    <label htmlFor="fileUpload0" className="upload" style={{ paddingBottom: '20px' }}>
                        <input type="file" id="fileUpload0" className="file-input" accept="image/*" />
                        <img id="gambarDetailResep0" src="image/unggahdisini.png" alt="upload resep" />
                    </label>
                    <input type="text" className="" placeholder="Contoh: Langkah 1 kupas bawang" />
                    <img src="image/tambahdetail.png" alt="tambah detail" onClick={addCaramasak} />
                    <img src="image/kurangdetail.png" alt="kurang detail" onClick={removeCaramasak} />
                </div>

                {/* Tag Kata Kunci */}
                <div className="katakunci">
                    <h2>Tag Kata Kunci</h2>
                    <div id="tagContainer" className="tag-container">
                        <input type="text" id="tagInput" placeholder="Tambahkan kata kunci dan tekan Enter" />
                    </div>
                    <div className="button unggah">
                        <a href="" className="btn btn-primary tag-button">Tag Berjualan</a>
                        <a href="suksesbro.html" className="btn btn-primary up-button">Unggah Resep</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UploadDetail;
