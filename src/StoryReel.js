import React from 'react';
import Story from './Story';
import './StoryReel.css';
import prashoonImg from './Prashoon-profile-img.jpg';
import shilpaImg from './Shilpa-profile-img.jpg';
import shirleyImg from './Shirley-profile-img.jpg';
import jeetImg from './Jeet-profile-img.jpg';
import sachinImg from './Sachin-profile-img.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpeg'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image={img1}
            profileSrc={prashoonImg}
            title="Prashoon B"
            />
            <Story 
            image={img3}
            profileSrc={shilpaImg}
            title="Shilpa WB"
            />
            <Story 
            image={img2}
            profileSrc={shirleyImg}
            title="Shirley Chawla"
            />
            <Story 
            image={img4}
            profileSrc={jeetImg}
            title="Jeet Barari"
            />
            <Story 
            image={img5}
            profileSrc={sachinImg}
            title="Sachin Warang"
            />
        </div>
    )
}

export default StoryReel;
