import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-global-1.jpeg';
import user_2 from '../../assets/user-global-2.jpeg';
import user_3 from '../../assets/user-global-3.jpeg';
import user_4 from '../../assets/user-global-4.webp';
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -75) { // Sesuaikan batas ini dengan jumlah slide
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='Testimonials'>
            <img className='next-btn' src={next_icon} alt="Next" onClick={slideForward} />
            <img className='back-btn' src={back_icon} alt="Back" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Tara Anggraeni <b className='b1'>S.Kom</b></h3>
                                    
                                </div>
                            </div>
                            <p>Kuliah di Global Institute sangat seru, proses belajar mengajarnya didampingi 
                                oleh dosen-dosen yang sangat friendly dan berkompeten. Sehingga memberikan lulusan 
                                yang berkualitas dan mampu bersaing di dunia kerja. Terima kasih Global Institute.
                
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>Evie Patma Suciati  <b className='b1'>S.Kom</b></h3>
                                    
                                </div>
                            </div>
                            <p>
                                Sebuah kebanggaan, bisa menjadi salah satu lulusan terbaik Global Institute, kenangan bersama teman-teman
                                <br />
                                seperjuangan dan para dosen yang tidak akan pernah terlupakan. Sukses selalu untuk Global Institute..!!
                
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>Diki Niki Sulistiyo, <b className='b1'>S.Kom</b></h3>
                                    
                                </div>
                            </div>
                            <p>
                            Global Institute bagi saya adalah rumah kedua dimana tempat saya 
                            mencari ilmu untuk membentuk jati diri yang baik dan mengembangkan bakat sesuai bidang saya. Global Institute. jadilah yang terbaik dari yang terbaik.
                           
                                </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>Babay Halim <b className='b1'>S.Kom</b></h3>
                                    
                                </div>
                            </div>
                            <p>
                            "Global Institute merupakan salah satu 
                            kampusterbaik di bidang teknologi dan bisnis karena kurikulum yang link & match yaitu mata kuliah yang menyesuaikan dengan kebutuhan industri teknologi saat ini. Menjadi langkah awal saya untuk berkarir di bidang IT, dan saat ini saya bekerja sebagai
                             system developer di sebuah perusahaan telekomunikasi bergengsi di Indonesia."
                             
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
