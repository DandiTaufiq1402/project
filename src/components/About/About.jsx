import React from 'react'
import './About.css'
import  about_img from '../../assets/about-global.webp'
import  play_icon from '../../assets/play-icon.png'


function About({setPlayState}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img className='about_img' src={about_img} alt="" />
        <img className='play_icon' src={play_icon} alt="" onClick={()=>{
          setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2><b> FTIK GLOBAL INSTITUTE</b>/ PROFIL</h2>
        <p>
        Selamat datang di Fakultas Teknologi Informasi dan Komunikasi (FTIK) di Global Institute, sebuah wadah untuk menggali dan mengembangkan potensi tak terbatas dari teknologi informasi dan komunikasi. Di sini, kami tidak hanya menjalankan kurikulum, kami menghidupkan visi masa depan di setiap kelas dan laboratorium kami.
        </p>

<p>FTIK di Global Institute adalah tempat di mana kecemerlangan akademis bertemu dengan inovasi praktis. Dengan tim pengajar yang berpengalaman dan fasilitas terkini, kami memastikan setiap mahasiswa kami mendapat pendidikan terbaik untuk menghadapi dunia yang terus berubah. Kami membangun tidak hanya pengalaman belajar, tetapi komunitas yang mendukung di mana setiap ide diterima dengan antusiasme dan diubah menjadi solusi yang berarti.
</p>
<p>Bergabunglah dengan FTIK di Global Institute dan temukan bagaimana kami melampaui batas-batas teknologi hari ini untuk menciptakan solusi yang menginspirasi dan memengaruhi dunia.
</p>






        

     </div> {/*Tambahkan CTA */}
    </div>
  )
}

export default About
