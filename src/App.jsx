 import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar' //KADQANG GOlBOK codinganya
import Hero from './components/hero/Hero/'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Matkul from './components/Matkul/Matkul'
import VisiMisi from './components/VisiMisi/VisiMisi'
import StrukturOrganisasi from './components/StrukturOrganisasi/StrukturOrganisasi'
import GalleryPrestasi from './components/GalleryPrestasi/GalleryPrestasi'
import PhotosAchievements from './components/photosAchievements/photosAchievements'
import Kurikulum from './components/Kurikulum/Kurikulum'
import Akademik from './components/Akademik/Akademik'



const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle='Our PROGRAM' Title='What we Offer'/>
      <Programs/> 
      <Title subTitle='Global Institute' Title='Fakultas Teknologi Informasi dan Komunikasi (FTIK)'/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='' Title='Visi & Misi'/>
       <VisiMisi/> 
      <Title subTitle='Global Institute' Title='Jurusan & Prodi'/>
      <Matkul/>
      <Title subTitle='Global Isntitute' Title='Struktur & Organisasi'/>
      <StrukturOrganisasi/>
      <Title subTitle='Global Institute' Title='Curriculum'/>
      <Kurikulum/>
      <Title subTitle='Global Institute' Title='Panduan Akademik'/>
      <Akademik/>
      <Title subTitle='Global Institute' Title='Gallery Photos'/>
      <Campus/>
      <Title subTitle='Global Intsitute' Title='Achievements Photos'/>
      <PhotosAchievements/>
      <GalleryPrestasi/>
      <Title subTitle='Testimoni Alumni' Title='Global Institute'/>
      <Testimonials/>
      <Title subTitle='Contact Us' Title='Get in Touch '/>
      <Contact/>
      <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
