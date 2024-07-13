import React from 'react';
import './StrukturOrganisasi.css'; // Import file CSS untuk styling

const StrukturOrganisasi = () => {
  return (
    <div className="organisasi-container">
      <div className="organisasi">
        {/* Rektor */}
        <div className="card">
          <div className="image">
            <img src="https://berita.99.co/wp-content/uploads/2022/07/foto-profil-wa-kosong.jpg" alt="Rektor" />
          </div>
          <div className="details">
            <h3>Ka. Prodi Teknik Informatika</h3>
            <p>Dr ( Cand) Fredy Susanto, M.Kom.</p>
          </div>
        </div>

        {/* Wakil Rektor Bidang Akademik */}
        <div className="card">
          <div className="image">
            <img src="https://berita.99.co/wp-content/uploads/2022/07/foto-profil-wa-kosong.jpg" alt="" />
          </div>
          <div className="details">
            <h3>Ka. Prodi Kajian Film & Media</h3>
            <p>M. Luthfi Prabowo, M.Ikom</p>
          </div>
        </div>

        {/* Wakil Rektor Bidang Non Akademik */}
        <div className="card">
          <div className="image">
            <img src="https://berita.99.co/wp-content/uploads/2022/07/foto-profil-wa-kosong.jpg" alt="Wakil Rektor Bidang Non Akademik" />
          </div>
          <div className="details">
            <h3>Sekretaris FTIK</h3>
            <p>Nunung Nurmaesah, M.Kom.</p>
          </div>
        </div>

        {/* Dekan FTIK */}
        <div className="card">
          <div className="image">
            <img src="https://i0.wp.com/global.ac.id/wp-content/uploads/2014/10/rahmat-s.jpg?fit=284%2C300&ssl=1" alt="Dekan FTIK" />
          </div>
          <div className="details">
            <h3>Dekan FTIK</h3>
            <p>Rahmat Tullah, M.Kom.</p>
          </div>
        </div>

        {/* Dekan FEB & Ka. Prodi BD */}
        <div className="card">
          <div className="image">
            <img src="https://berita.99.co/wp-content/uploads/2022/07/foto-profil-wa-kosong.jpg" alt="Dekan FEB & Ka. Prodi BD" />
          </div>
          <div className="details">
            <h3>Ka. Biro Teknologi & Sistem Informasi</h3>
            <p>Nova Teguh Sunggono, M.Kom.</p>
          </div>
        </div>

        {/* Ka. Prodi Sistem Informasi */}
        <div className="card">
          <div className="image">
            <img src="https://i0.wp.com/global.ac.id/wp-content/uploads/2014/10/achmad-sidik.jpg?fit=266%2C300&ssl=1" alt="Ka. Prodi Sistem Informasi" />
          </div>
          <div className="details">
            <h3>Ka. Prodi Sistem Informasi</h3>
            <p>Ahmad Sidik, M.Kom.</p>
          </div>
        </div>

        {/* Ka. Biro Kemahasiswaan & Marketing */}
        <div className="card">
          <div className="image">
            <img src="https://berita.99.co/wp-content/uploads/2022/07/foto-profil-wa-kosong.jpg" alt="Ka. Biro Kemahasiswaan & Marketing" />
          </div>
          <div className="details">
            <h3>UPT Infrastruktur & IT Support</h3>
            <p>Jalaludin, S.Kom.</p>
          </div>
        </div>

        {/* UPT Kemahasiswaan */}
        <div className="card">
          <div className="image">
            <img src="https://berita.99.co/wp-content/uploads/2022/07/foto-profil-wa-kosong.jpg" alt="UPT Kemahasiswaan" />
          </div>
          <div className="details">
            <h3>UPT System Development</h3>
            <p>Bambang Tri, S.Kom.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
