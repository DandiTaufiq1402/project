import React from 'react';
import perstasi_1 from '../../assets/kontol1.jpeg';
import perstasi_2 from '../../assets/prestaisi2.jpeg';
import perstasi_3 from '../../assets/perstasi1.jpeg';
import perstasi_4 from '../../assets/pestasi3.jpeg';
import './photosAchievements.css';


const PhotosAchievements = () => {
    return (
        <div className="photos-achievements">
            <h2>Gallery of Achievements</h2>
            <div className="photos-container">
                <div className="photo-item">
                    <img src={perstasi_1} alt="Achievement 1" />
                    <div className="overlay">
                        <div className="text">Achievement 1</div>
                    </div>
                </div>
                <div className="photo-item">
                    <img src={perstasi_2} alt="Achievement 2" />
                    <div className="overlay">
                        <div className="text">Achievement 2</div>
                    </div>
                </div>
                <div className="photo-item">
                    <img src={perstasi_3} alt="Achievement 3" />
                    <div className="overlay">
                        <div className="text">Achievement 3</div>
                    </div>
                </div>
                <div className="photo-item">
                    <img src={perstasi_4} alt="Achievement 4" />
                    <div className="overlay">
                        <div className="text">Achievement 4</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotosAchievements;
