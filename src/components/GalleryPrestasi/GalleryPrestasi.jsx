import React from 'react';
import './GalleryPrestasi.css';

const GalleryPrestasi = () => {
  const prestasi = [
    { name: 'Siti Khojanah', achievement: 'Final Lomba Circuit Orienteering Banten' },
    { name: 'Siti Khojanah', achievement: 'Juara Umum Lomba Circuit Orienteering Banten' },
    { name: 'Siti Khojanah', achievement: 'Juara 2 Puteri Se-Tangerang, Circuit Orienteering Tangerang Raya' },
    { name: 'Siti Khojanah', achievement: 'Juara 1 Senior Puteri, Lomba Circuit Orienteering Banten' },
    { name: 'Siti Khojanah', achievement: 'Juara 3 Senior Puteri, Lomba Circuit Orienteering Banten' },
    { name: 'Ahmad Zaenuri', achievement: 'Diploma, World Orienteering Day' },
    { name: 'Yuhana Widi Rahayu', achievement: 'Diploma, World Orienteering Day' },
    { name: 'Ahmad Zaenuri', achievement: 'Peserta Kebut Gunung Nasional Gede – Pangrango' },
    { name: 'Yuhana Widi Rahayu', achievement: 'Peserta Kebut Gunung Nasional Gede – Pangrango' },
    { name: 'Rizky', achievement: 'Juara 1 Lomba Photography, Tingkat Provinsi Banten (Dinas Pendidikan Provinsi)' },
    { name: 'Astrid, Rizky', achievement: 'Juara 2 Lomba Film Dokumenter Kategori Informatif, Tingkat Provinsi Banten (Dinas Pendidikan Provinsi)' },
    { name: 'Yayan, Andrian', achievement: 'Juara 2 Lomba Film Dokumenter Kategori Sinopsis, Tingkat Provinsi Banten (Dinas Pendidikan Provinsi)' },
    { name: 'Viktor Mahardika', achievement: 'Juara 2 Web Design Tingkat Kota Tangerang' },
    { name: 'Alif', achievement: 'Juara 2 PORDA (Pekan Olahraga Mahasiswa)' }
  ];

  return (
    <div className="gallery-prestasi">
      <h2>Prestasi Mahasiswa Global Institute of Technology and Business</h2>
      <div className="organisasi-container">
        <div className="organisasi">
          {prestasi.map((item, index) => (
            <div key={index} className="prestasi-item">
              <strong>{item.name}:</strong> {item.achievement}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPrestasi;
  