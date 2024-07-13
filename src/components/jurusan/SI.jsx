import React from 'react';
import './Matkul.css';

const Matkul = () => {
  return (
    <div className="program-container">
      <h1>Program Studi Sistem Informasi</h1>
      <p className="description">
        Program studi sistem informasi adalah program pendidikan tinggi yang berkaitan dengan pengembangan, penggunaan, dan manajemen sistem informasi dalam suatu organisasi. Program ini menggabungkan aspek-aspek teknologi informasi dan bisnis, sehingga lulusan dari program studi ini memiliki kemampuan untuk memahami dan menerapkan teknologi informasi dalam konteks bisnis. Materi kuliah dalam program studi sistem informasi mencakup bidang-bidang seperti analisis sistem, desain basis data, manajemen proyek TI, keamanan informasi, e-commerce, analisis bisnis, dan manajemen pengetahuan. Tujuan utama dari program studi ini adalah untuk mempersiapkan lulusan yang dapat mengelola, mengembangkan, dan mengoptimalkan sistem informasi organisasi agar mendukung tujuan bisnis dan operasional perusahaan dengan lebih efektif dan efisien.
      </p>

      <div className="konsentrasi-container">
        <div className="konsentrasi-item">
          <h3>Enterprise Resource Planning (ERP)</h3>
          <p>
            Konsentrasi Enterprise Resource Planning (ERP) dalam program studi sistem informasi fokus pada pengembangan, implementasi, dan manajemen sistem ERP dalam suatu organisasi. ERP adalah perangkat lunak yang mengintegrasikan berbagai fungsi dan proses bisnis dalam sebuah perusahaan menjadi satu sistem yang terpadu.
          </p>
          <p>
            Sistem ini mencakup modul-modul untuk manajemen sumber daya manusia, manajemen keuangan, manajemen persediaan, manufaktur, penjualan, dan pemasaran. Dengan menggunakan sistem ERP, perusahaan dapat meningkatkan efisiensi operasional, mengoptimalkan penggunaan sumber daya, meningkatkan visibilitas dan kontrol atas proses bisnis, serta mengambil keputusan berdasarkan data yang akurat dan real-time.
          </p>
          <p>
            Para ahli di bidang ERP memahami implementasi, konfigurasi, dan penggunaan sistem ERP serta dapat membantu organisasi dalam memilih dan mengintegrasikan solusi ERP yang sesuai dengan kebutuhan bisnis mereka. Konsentrasi ini memberikan lulusan kemampuan yang sangat dibutuhkan dalam industri untuk mengelola dan meningkatkan efisiensi operasional perusahaan melalui teknologi informasi yang terintegrasi.
          </p>
        </div>

        <div className="konsentrasi-item">
          <h3>Business Intelligence & Analytics (BIA)</h3>
          <p>
            Konsentrasi Business Intelligence & Analytics (BIA) dalam program studi sistem informasi fokus pada pengembangan dan penggunaan teknologi informasi untuk analisis data dan pengambilan keputusan yang didasarkan pada data.
          </p>
          <p>
            BIA mencakup proses pengumpulan data, pengolahan data, analisis data, visualisasi data, dan penggunaan alat-alat analitik untuk menghasilkan wawasan bisnis yang berharga. Para ahli di bidang BIA memahami teknologi seperti data warehouse, OLAP (Online Analytical Processing), data mining, dan algoritma analitik yang digunakan untuk mengeksplorasi dan menganalisis data.
          </p>
          <p>
            Mereka juga memahami aplikasi analisis prediktif dan preskriptif untuk membantu organisasi dalam membuat keputusan yang lebih baik dan strategis. Konsentrasi ini sangat relevan dalam era di mana data menjadi aset berharga bagi perusahaan untuk memahami pasar, pelanggan, dan operasi mereka secara lebih mendalam.
          </p>
        </div>

        <div className="konsentrasi-item">
          <h3>Information System Security (ISS)</h3>
          <p>
            Konsentrasi Information System Security (ISS) dalam program studi sistem informasi fokus pada keamanan sistem informasi dan perlindungan data dalam sebuah organisasi.
          </p>
          <p>
            Keamanan informasi menjadi semakin penting dengan meningkatnya ancaman siber dan perlunya melindungi data sensitif organisasi dari akses yang tidak sah, kebocoran, atau kerusakan. Para ahli di bidang ISS memahami teknologi keamanan seperti enkripsi data, firewalls, IDS (Intrusion Detection System), IPS (Intrusion Prevention System), pengelolaan identitas, keamanan jaringan, manajemen risiko keamanan, dan keamanan aplikasi.
          </p>
          <p>
            Mereka juga terlibat dalam audit keamanan, penilaian rentang, dan respons insiden untuk melindungi sistem informasi organisasi dari berbagai ancaman siber. Konsentrasi ini memberikan lulusan dengan keahlian yang sangat dibutuhkan dalam industri untuk mengelola dan meningkatkan keamanan informasi organisasi melalui penerapan teknologi dan praktik terbaik dalam keamanan informasi.
          </p>
        </div>
      </div>

      <h2>Potensi Karir</h2>
      <div className="potensi-karir-container">
        <div className="karir-item">Business Analyst</div>
        <div className="karir-item">Database Administrator</div>
        <div className="karir-item">System Analyst</div>
        <div className="karir-item">ERP Consultant</div>
        <div className="karir-item">Business Intelligence Analyst</div>
        <div className="karir-item">IT Project Manager</div>
      </div>
    </div>
  );
}

export default Matkul;
