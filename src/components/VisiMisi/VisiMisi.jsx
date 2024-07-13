import React from 'react';
import './VisiMisi.css'; // Sesuaikan dengan nama file CSS Anda

const VisiMisi = ({ id, title, details }) => {
  return (
    <div className={`visimisi visimisi-${id}`}>
      
      <div className="visimisi__details">
        <h2>{title}</h2>
        <li>
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </li>
        
      </div>
    </div>
  );
};

const Modal = ({ id, title, content }) => {
  return (
    <div id={`modal${id}`} className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <h1 className="h11">{title}</h1>
        </div>
        <div className="modal__text">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <a href="#" className="modal__close">
          &times;
        </a>
      </div>
    </div>
  );
};

const App = () => {
  // Data untuk visi dan misi
  const visiMisiData = [
    {
      id: 1,
      title: 'Program Studi Teknik Informatika',
      image: '', // Ganti dengan path gambar sesuai kebutuhan
      details: [
        'Visi: Menjadi pionir dalam pengembangan teknologi informatika yang inovatif dan berkelanjutan, memimpin transformasi digital di berbagai sektor.',
        'Misi:',
        '- Memberikan pendidikan yang komprehensif dan terkini dalam bidang teknik informatika, mengintegrasikan teori dengan praktik terbaik industri.',
        '- Mendorong kolaborasi lintas disiplin dan inovasi melalui proyek-proyek penelitian dan pengembangan teknologi.',
        '- Menyediakan lingkungan belajar yang inspiratif dan mendukung, mempersiapkan mahasiswa untuk menghadapi tantangan global di era digital.',
        '- Berkomitmen pada keunggulan akademik dan profesionalisme, membangun jaringan yang kuat antara mahasiswa, alumni, dan mitra industri untuk memajukan teknologi informatika secara berkelanjutan.'
      ],
    },
    {
      id: 2,
      title: 'Program Studi Sistem Informasi',
      image: 'image2.jpg', // Ganti dengan path gambar sesuai kebutuhan
      details: [
        'Visi: Menjadi pusat keunggulan dalam pengembangan dan implementasi sistem informasi yang berdaya guna, memimpin transformasi digital di era globalisasi.',
        'Misi:',
        '- Mengembangkan kurikulum yang mengintegrasikan pemahaman mendalam tentang teknologi informasi dengan strategi bisnis dan manajerial.',
        '- Memfasilitasi pengalaman belajar yang interaktif dan aplikatif, dengan fokus pada proyek-proyek nyata dan kemitraan industri.',
        '- Mempersiapkan lulusan untuk menghadapi tantangan global dengan keterampilan dalam analisis, desain, implementasi, dan manajemen sistem informasi yang inovatif.',
        '- Berkomitmen pada penelitian dan pengembangan solusi teknologi informasi yang berkelanjutan, menjembatani kesenjangan antara teori dan praktik di lapangan.'
      ],
    },
    {
      id: 3,
      title: 'Program Studi Kajian Film, Televisi, dan Media',
      image: '../../assets/movie.jpg', // Ganti dengan path gambar sesuai kebutuhan
      details: [
        'Visi: Menjadi pusat keunggulan dalam pendidikan dan produksi konten multimedia yang kreatif dan berdampak global.',
        'Misi:',
        '- Membekali mahasiswa dengan keterampilan teknis dan artistik yang diperlukan untuk menciptakan karya-karya multimedia yang inovatif dan berdampak.',
        '- Menggabungkan teori dengan praktik dalam lingkungan belajar yang kolaboratif dan mendukung, memfasilitasi eksperimen dan penemuan di berbagai platform produksi.',
        '- Mendorong dialog lintas budaya dan pemahaman mendalam tentang peran media dalam mengubah masyarakat global.',
        '- Menyediakan akses ke jaringan industri dan kesempatan profesional untuk memfasilitasi karir yang sukses dalam industri media yang terus berkembang.'
      ],
    },
  ];

  return (
    <div>
      <div className="section-visimisi">
        {visiMisiData.map(data => (
          <VisiMisi
            key={data.id}
            id={data.id}
            title={data.title}
            image={data.image}
            details={data.details}
          />
        ))}
      </div>

      <div>
        {visiMisiData.map(data => (
          <Modal
            key={data.id}
            id={data.id}
            title={data.title}
            content={data.details}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
