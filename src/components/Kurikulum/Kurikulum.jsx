// Curriculum.jsx
import React from 'react';
import './Kurikulum.css';

const Kurikulum = () => {
  return (
    <div className="curriculum">
      <section className="program">
        <div className="card-teknik-informatika">
          <div className="content">
            <p className="heading">Teknik Informatika</p>
            <li className="para">
              <li>Pengantar Pemrograman</li>
              <li>Sistem Operasi</li>
              <li>Struktur Data dan Algoritma</li>
              <li>Pemrograman Web</li>
              <li>Keamanan Jaringan</li>
              <li>Proyek Akhir</li>
            </li>
          </div>
        </div>
      </section>
      
      <section className="program">
        <div className="card-sistem-informasi">
          <div className="content">
            <p className="heading">Sistem Informasi</p>
            <li className="para">
              <li>Dasar-dasar Sistem Informasi</li>
              <li>Manajemen Basis Data</li>
              <li>Analisis dan Desain Sistem</li>
              <li>Keamanan Informasi</li>
              <li>Sistem Enterprise</li>
              <li>Proyek Akhir</li>
            </li>
          </div>
        </div>
      </section>
        
      <section className="program">
        <div className="card-kajian-film">
          <div className="content">
            <p className="heading">Kajian Film, Televisi, dan Media</p> 
            <li className="para">
              <li>Pengantar Kajian Film</li>
              <li>Produksi Film dan Televisi</li>
              <li>Penulisan Skenario</li>
              <li>Teori dan Kritik Film</li>
              <li>Editing dan Post-produksi</li>
              <li>Proyek Akhir</li>
            </li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kurikulum;
