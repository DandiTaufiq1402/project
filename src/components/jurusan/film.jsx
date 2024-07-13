import React from 'react';
import './Matkul.css';

const Matkul = () => {
  return (
    <div className="program-container">
      <h1>Program Studi Kajian Film, Televisi, dan Media</h1>
      <p className="description">
        Program studi kajian film, televisi, dan media adalah program pendidikan tinggi yang mempelajari teori, sejarah, dan praktik produksi film, televisi, dan media. Mahasiswa dalam program studi ini akan belajar tentang berbagai aspek produksi audiovisual, termasuk skenario, sinematografi, penyuntingan, desain suara, produksi televisi, dan teknologi media digital. Mereka juga akan mempelajari tentang industri media, estetika visual, teori komunikasi, analisis budaya, dan tren terbaru dalam industri hiburan. Tujuan dari program studi ini adalah untuk mempersiapkan lulusan yang dapat bekerja di berbagai bidang industri media, termasuk pembuatan film dan televisi, produksi konten digital, periklanan, broadcasting, dan manajemen acara. Program studi ini juga bertujuan untuk mengembangkan pemahaman yang mendalam tentang budaya visual dan media, serta keterampilan teknis yang diperlukan untuk berkembang dalam industri yang terus berubah ini.
      </p>

      <div className="konsentrasi-container">
        <div className="konsentrasi-item">
          <h3>Film Production & Directing (FPD)</h3>
          <p>
            Konsentrasi Film Production & Directing (FPD) dalam program studi kajian film, televisi, dan media fokus pada pengembangan keterampilan produksi film dan televisi serta kemampuan untuk menyutradarai produksi audiovisual.
          </p>
          <p>
            Mahasiswa dalam konsentrasi ini akan belajar tentang proses produksi film dan televisi, termasuk perencanaan produksi, manajemen produksi, sinematografi, desain produksi, penyuntingan film, pengarahan aktor, dan teknik penyutradaraan.
          </p>
          <p>
            Konsentrasi ini mempersiapkan lulusan dengan keterampilan yang diperlukan untuk bekerja sebagai sutradara, produser, asisten sutradara, atau profesional dalam produksi audiovisual di industri film, televisi, atau media digital.
          </p>
        </div>

        <div className="konsentrasi-item">
          <h3>Media Writing & Broadcasting (MWB)</h3>
          <p>
            Konsentrasi Media Writing & Broadcasting (MWB) dalam program studi kajian film, televisi, dan media fokus pada pengembangan keterampilan menulis skenario, jurnalisme, dan penyiaran dalam konteks industri media.
          </p>
          <p>
            Mahasiswa dalam konsentrasi ini akan mempelajari teknik penulisan skenario untuk film, televisi, dan konten digital, serta praktik jurnalisme dan produksi berita dalam berbagai platform media.
          </p>
          <p>
            Konsentrasi ini mempersiapkan lulusan dengan keterampilan yang diperlukan untuk bekerja sebagai penulis skenario, jurnalis, penyiar berita, atau profesional dalam produksi media dan broadcasting di industri hiburan dan informasi.
          </p>
        </div>

        <div className="konsentrasi-item">
          <h3>Digital Media Production (DMP)</h3>
          <p>
            Konsentrasi Digital Media Production (DMP) dalam program studi kajian film, televisi, dan media fokus pada pengembangan keterampilan produksi konten digital untuk platform online dan media sosial.
          </p>
          <p>
            Mahasiswa dalam konsentrasi ini akan mempelajari tentang pembuatan video digital, konten viral, produksi multimedia, desain grafis, animasi, dan pengeditan video untuk internet dan platform digital lainnya.
          </p>
          <p>
            Konsentrasi ini mempersiapkan lulusan dengan keterampilan yang diperlukan untuk bekerja sebagai produser konten digital, desainer grafis, editor video, atau profesional dalam produksi media digital untuk berbagai platform online.
          </p>
        </div>
      </div>

      <h2>Potensi Karir</h2>
      <div className="potensi-karir-container">
        <div className="karir-item">Film Director</div>
        <div className="karir-item">Producer</div>
        <div className="karir-item">Screenwriter</div>
        <div className="karir-item">Broadcast Journalist</div>
        <div className="karir-item">Digital Content Producer</div>
        <div className="karir-item">Media Consultant</div>
      </div>
    </div>
  );
}

export default Matkul;
