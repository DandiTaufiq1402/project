import React, { useState } from 'react';
import './Matkul.css'; // Import file CSS untuk styling
import Logo_ti from '../../assets/Global-ti.jpg';
import Logo_si from '../../assets/Global-si.jpg';
import Logo_Film from '../../assets/Global-Film.png';

const Matkul = () => {
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className='matkul-container'>
      <section className='section-card'>
        <div className='card card-1' onClick={() => openPopup('ti')}>
          <img className='card__img' src={Logo_ti} alt='Informatics Engineering' />
          <div className='card__details'>
            <h1>Global Institute</h1>
            
            <p>information technology</p>
          </div>
        </div>

        <div className='card card-2' onClick={() => openPopup('si')}>
          <img className='card__img' src={Logo_si} alt='Information Systems' />
          <div className='card__details'>
            <h1>Global Institute</h1>
            
            <p>Information Systems</p>
          </div>
        </div>

        <div className='card card-3' onClick={() => openPopup('film')}>
          <img className='card__img' src={Logo_Film} alt='Film, Television & Media Studies' />
          <div className='card__details'>
            <h1>Global Institute</h1>
           
            <p>Film, Television & Media Studies</p>
          </div>
        </div>
      </section>

      {popupContent && (
        <div className='popup'>
          <div className='popup__content'>
            {popupContent === 'ti' && (
              <>
                <h2>Program Studi Teknik Informatika</h2>
                <p>
                  Program Studi Teknik Informatika adalah sebuah program pendidikan di Global Institute yang mempelajari tentang pengembangan, analisis, dan penggunaan teknologi informasi dan komputer. Mahasiswa yang mengambil program studi ini akan belajar tentang dasar-dasar teknologi informasi, pemrograman, database, jaringan komputer, keamanan informasi, pengembangan aplikasi, desain grafis, dan topik terkait lainnya. Tujuan utama dari program studi Teknik Informatika adalah untuk mempersiapkan lulusannya menjadi profesional di bidang teknologi informasi, seperti pengembang perangkat lunak, administrator jaringan, arsitek solusi teknologi, UI/UX design, atau konsultan TI. Selain itu, program ini juga bertujuan untuk memberikan dasar pengetahuan dan keterampilan untuk memecahkan masalah dalam berbagai industri dan bidang usaha yang bergantung pada teknologi informasi dan komputer.
                </p>
                <br />
                <h3>Konsentrasi:</h3>
                
                  <h2>Software Engineering (SE)</h2>
                  <p>                  Software Engineering (SE) : Konsentrasi software engineering atau rekayasa perangkat lunak adalah sebuah disiplin ilmu yang berkaitan dengan pengembangan, perancangan, dan pembuatan perangkat lunak atau software. Bidang ini meliputi seluruh tahapan dalam siklus pengembangan perangkat lunak, mulai dari analisis kebutuhan, perancangan arsitektur, implementasi kode, pengujian, hingga pemeliharaan atau perbaikan perangkat lunak. Seorang software engineer atau insinyur perangkat lunak bertanggung jawab untuk membuat perangkat lunak yang aman, handal, efisien, mudah dimengerti, dan dapat diandalkan oleh pengguna. Mereka menggunakan metode, teknologi, dan alat yang tepat untuk membangun perangkat lunak yang sesuai dengan spesifikasi dan persyaratan klien atau pengguna. Konsentrasi software engineering juga meliputi konsep-konsep seperti manajemen proyek perangkat lunak, pengembangan perangkat lunak berbasis web, pengembangan aplikasi mobile, pengujian perangkat lunak, keamanan perangkat lunak, dan pengembangan aplikasi terdistribusi. Semua aspek ini penting dalam pengembangan perangkat lunak yang berkualitas tinggi dan dapat dipercaya oleh pengguna.
                  </p>
                  <h2>Internet of Things & Networking (IOTN)</h2>
                  <p>Internet of Things (IoT) & Networking (IOTN) : Konsentrasi Internet of Things (IoT) dan Networking adalah dua bidang teknologi yang saling terkait dan memainkan peran penting dalam menghubungkan perangkat dan sistem dalam lingkungan digital yang semakin terkoneksi. Internet of Things (IoT) adalah konsep di mana berbagai perangkat yang terhubung ke internet, seperti sensor, kamera, alat kesehatan, kendaraan, dan peralatan rumah tangga, dapat saling berkomunikasi dan bertukar data untuk menghasilkan informasi yang berguna. IoT memungkinkan pengumpulan data secara real-time, analisis data yang lebih akurat, dan pengambilan keputusan yang lebih baik. Para ahli di bidang IoT bekerja pada pengembangan perangkat keras dan perangkat lunak, teknologi jaringan, keamanan, dan manajemen data yang diperlukan untuk mengimplementasikan solusi IoT. Sementara itu, bidang Networking fokus pada pengembangan, manajemen, dan pengoperasian jaringan komputer. Para ahli di bidang Networking mempelajari bagaimana membangun, mengkonfigurasi, dan mengoptimalkan jaringan komputer, termasuk teknologi seperti protokol jaringan, infrastruktur jaringan, keamanan jaringan, dan manajemen jaringan. Networking menjadi semakin penting dengan semakin banyaknya perangkat dan sistem yang terhubung ke internet dan memerlukan akses jaringan yang andal dan aman. Dalam praktiknya, para ahli di bidang IoT dan Networking sering bekerja sama untuk mengembangkan solusi teknologi yang terintegrasi dan terkoneksi. Kombinasi keahlian di kedua bidang ini diperlukan untuk mengembangkan solusi IoT yang aman, efisien, dan dapat diandalkan, serta memastikan jaringan yang mendukungnya berjalan dengan lancar dan dapat diakses dengan mudah.
                  </p>
                  <h2>Computerized Design & Multimedia (CDM)</h2>
                  <p>Computerized Design & Multimedia (CDM) : Konsentrasi Computerized and Multimedia adalah bidang teknologi yang berkaitan dengan pengembangan dan penggunaan teknologi komputer untuk menghasilkan konten multimedia yang interaktif dan menarik. Konsentrasi ini mencakup berbagai disiplin ilmu seperti desain grafis, animasi, audio, video, dan pengembangan aplikasi multimedia. Dalam konsentrasi ini, para ahli menggunakan perangkat lunak seperti Adobe Photoshop, Adobe Illustrator, Adobe Premiere, Adobe After Effects, Autodesk 3D Studio Max, dan sejumlah alat pengembangan perangkat lunak lainnya untuk membuat gambar, animasi, audio, dan video. Mereka juga mengembangkan aplikasi multimedia, baik untuk desktop maupun untuk perangkat seluler. Keahlian dalam bidang Computerized and Multimedia penting dalam mengembangkan berbagai jenis konten digital, seperti situs web interaktif, presentasi multimedia, game, video pendidikan, dan konten pemasaran. Ahli di bidang ini harus memahami aspek-aspek seperti desain grafis, animasi, audio, dan video serta teknologi yang diperlukan untuk menghasilkan produk yang berkualitas tinggi. Konsentrasi Computerized and Multimedia memiliki banyak aplikasi dalam industri seperti media, hiburan, pendidikan, kesehatan, bisnis, dan pemasaran. Semakin berkembangnya teknologi digital dan permintaan akan konten multimedia yang menarik, maka semakin banyak pula peluang karir yang tersedia di bidang ini.
                  </p>
                  <br />
                  <h3>Potensi Karir
                  </h3>
                  <li>SE
                  </li>
                  <li>IOTN</li>
                  <li>CDM</li>
                  <li>Web Developer
                  </li>
                  <li>Programer (Web, .Net & Mobile)
                  </li>
                  <li>Database Administrator
                  </li>
                  <li>System Implementor
                  </li>
                  <li>System Analyst & Rekayasa System
                  </li>
                  <li>System Testing & IT Support
                  </li>
                  <br />
                  <br />
      



                
              </>
            )}
            {popupContent === 'si' && (
              <>
                <h1>Program Studi Sistem Informasi</h1>
                <p>
                  Program Studi Sistem Informasi adalah program pendidikan di Global Institute yang mempersiapkan mahasiswa untuk mengelola teknologi informasi dalam organisasi bisnis. Mahasiswa akan mempelajari pengembangan sistem informasi, manajemen basis data, analisis bisnis, keamanan informasi, dan teknologi terkait untuk mendukung kebutuhan informasi organisasi.
                </p>
                <br />
                <h3>Konsentrasi:</h3>
                
                  <h2>Accounting Information System (AIS)</h2>
                  <p>                  pAccounting Information System (AIS) : Konsentrasi Accounting Information System (AIS) adalah bidang yang berkaitan dengan pengembangan, penggunaan, dan manajemen sistem informasi akuntansi dalam suatu organisasi. Bidang ini menggabungkan aspek-aspek akuntansi dan teknologi informasi, sehingga lulusan dari bidang ini memiliki pemahaman yang baik tentang bagaimana teknologi informasi dapat digunakan untuk memfasilitasi proses akuntansi dan manajemen keuangan. Materi kuliah dalam bidang AIS mencakup bidang-bidang seperti akuntansi keuangan, manajemen keuangan, basis data, sistem informasi, pengendalian internal, dan audit. Selain itu, para mahasiswa juga belajar tentang teknologi informasi yang digunakan dalam operasi dan manajemen keuangan, seperti perangkat lunak akuntansi, sistem manajemen basis data, dan aplikasi analisis keuangan. Setelah lulus, lulusan bidang AIS dapat bekerja di berbagai industri, seperti akuntansi, keuangan, konsultasi bisnis, perbankan, dan organisasi pemerintah. Mereka dapat bekerja dalam posisi seperti akuntan, auditor, analis keuangan, manajer keuangan, dan banyak lagi. Dalam era digital yang semakin maju, sistem informasi akuntansi menjadi semakin penting dalam operasi dan manajemen keuangan. Oleh karena itu, lulusan bidang AIS memiliki peluang karir yang baik di masa depan dan akan terus dibutuhkan oleh berbagai jenis organisasi yang memerlukan keahlian dalam teknologi informasi dan akuntansi.
                  </p>
                  <h2>Management Information System (MIS)</h2>
                  <p>Management Information System (MIS) : Konsentrasi Management Information System (MIS) adalah bidang yang berkaitan dengan pengembangan, penggunaan, dan manajemen sistem informasi dalam suatu organisasi untuk memfasilitasi pengambilan keputusan dan manajemen bisnis yang efektif. Bidang ini menggabungkan aspek-aspek teknologi informasi dan manajemen, sehingga lulusan dari bidang ini memiliki pemahaman yang baik tentang bagaimana teknologi informasi dapat digunakan untuk mendukung manajemen dan pengambilan keputusan dalam bisnis. Materi kuliah dalam bidang MIS mencakup bidang-bidang seperti manajemen proyek, analisis bisnis, manajemen basis data, sistem informasi, keamanan informasi, manajemen jaringan, e-commerce, dan pengembangan aplikasi. Selain itu, para mahasiswa juga belajar tentang strategi bisnis dan manajemen, sehingga mereka memiliki pemahaman yang baik tentang bagaimana teknologi informasi dapat diterapkan untuk mencapai tujuan bisnis. Setelah lulus, lulusan bidang MIS dapat bekerja di berbagai industri, seperti teknologi informasi, konsultasi bisnis, perbankan, asuransi, perusahaan manufaktur, dan organisasi pemerintah. Mereka dapat bekerja dalam posisi seperti analis sistem, pengembang aplikasi, manajer proyek, analis bisnis, manajer TI, dan banyak lagi. Dalam era digital yang semakin maju, sistem informasi manajemen menjadi semakin penting dalam operasi dan manajemen bisnis. Oleh karena itu, lulusan bidang MIS memiliki peluang karir yang baik di masa depan dan akan terus dibutuhkan oleh berbagai jenis organisasi yang memerlukan keahlian dalam teknologi informasi dan manajemen.
                  </p>
                  <h2>Logistic & Production Information System (LPIS)</h2>
                  <p>Logistic & Production Information System (LPIS) : Konsentrasi Logistic & Production Information System (LPIS) adalah bidang yang berkaitan dengan pengembangan, penggunaan, dan manajemen sistem informasi dalam bidang logistik dan produksi dalam suatu organisasi. Bidang ini menggabungkan aspek-aspek teknologi informasi, logistik, dan manajemen produksi, sehingga lulusan dari bidang ini memiliki pemahaman yang baik tentang bagaimana teknologi informasi dapat digunakan untuk meningkatkan efisiensi dan efektivitas operasi logistik dan produksi. Materi kuliah dalam bidang LPIS mencakup bidang-bidang seperti manajemen rantai pasok, manajemen produksi, manajemen persediaan, sistem informasi, pengendalian kualitas, analisis data, dan manajemen proyek. Selain itu, para mahasiswa juga belajar tentang teknologi informasi yang digunakan dalam operasi dan manajemen logistik dan produksi, seperti sistem manajemen basis data, perangkat lunak manajemen persediaan, dan aplikasi analisis data. Setelah lulus, lulusan bidang LPIS dapat bekerja di berbagai industri, seperti manufaktur, perdagangan, logistik, dan organisasi pemerintah. Mereka dapat bekerja dalam posisi seperti analis logistik, analis produksi, manajer logistik, manajer produksi, manajer rantai pasok, dan banyak lagi. Dalam era digital yang semakin maju, sistem informasi logistik dan produksi menjadi semakin penting dalam operasi dan manajemen bisnis. Oleh karena itu, lulusan bidang LPIS memiliki peluang karir yang baik di masa depan dan akan terus dibutuhkan oleh berbagai jenis organisasi yang memerlukan keahlian dalam teknologi informasi dan manajemen logistik dan produksi.
                  </p>
                  <br />
                  <h3>Potensi Karir</h3>
                  <li>AIS</li>
                  <li>MIS
                  </li>
                  <li>LPIS
                  </li>
                  <li>Staf Akuntansi
                  </li>
                  <li>Account Officer
                  </li>
                  <li>Konsultan Pajak
                  </li>
                  <li>Akuntan Pendidik
                  </li>
                  <li>Inventory Control Staff
                  </li>
                  <li>Administrasi Gudang
                  </li>
                  <br />
                  <br />
      



              </>
            )}
            {popupContent === 'film' && (
              <>
                <h2>Program Studi Kajian Film, Televisi & Media</h2>
                <p>
                  Program Studi Kajian Film, Televisi & Media adalah sebuah program pendidikan di Global Institute yang mempelajari aspek-aspek kreatif dan teknis dari produksi film, televisi, dan media digital. Mahasiswa akan mempelajari sejarah, teori, dan praktik dalam produksi media serta mengembangkan keterampilan dalam penulisan naskah, pengeditan video, dan produksi audiovisual.
                </p>
                <br />
                <h3>Konsentrasi:</h3>
                
                  <h2>Visual Media Communication (VMC)</h2>
                    <p>                  Visual Media Communication (VMC) : Konsentrasi Visual Media Communication (VMC) berfokus pada aspek visual dan estetika dalam film, televisi, dan media. Mahasiswa akan mempelajari berbagai teknik dan teori visual storytelling, desain grafis, animasi, dan multimedia. Lulusan VMC diharapkan memiliki kemampuan untuk membuat konten visual yang menarik dan informatif, memahami dan menggunakan berbagai software desain dan multimedia, bekerja secara kreatif dan kolaboratif dalam tim, memahami dan menganalisis budaya visual.
                    </p>
                  <h2>Public Relation & Digital Communication (PRDC)</h2>
                  <p>Public Relation & Digital Communication (PRDC) : Konsentrasi Public Relation & Digital Communication (PRDC) berfokus pada strategi komunikasi dan penggunaan media digital dalam membangun dan memelihara hubungan dengan publik. Mahasiswa akan mempelajari berbagai teori dan praktik public relations, media sosial, dan komunikasi digital. Lulusan PRDC diharapkan memiliki kemampuan untuk menyusun strategi komunikasi yang efektif, menggunakan media digital untuk membangun dan memelihara hubungan dengan publik, menganalisis dan mengukur efektivitas program komunikasi, memahami dan mengikuti perkembangan teknologi komunikasi digital.
                  </p>
                  <br />
                  <h3>Potensi Karir
                                </h3>
              <li>VMC
              </li>
              <li>PRDC
              </li>
              <li>Desainer grafis
              </li>
              <li>Animator</li>
              <li>Video editor
              </li>
              <li>Content creator
              </li>
              <li>Motion graphic artist
              </li>
              <li>Visual effects artist
              </li>
            </>
            )}
                        <button className='pepek' onClick={closePopup}>Close</button >

          </div>
        </div>
      )}
    </div>
  );
};

export default Matkul;
