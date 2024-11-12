import React from 'react';
import '../scss/Main.scss'; // 수정된 경로
import mainBg from '../assets/main-bg.png';

const Main = () => {
    return (
        <div className="main">
            <img src={mainBg} alt="Background" className="main-bg" />
            <div className="text-overlay">
                요즘, 날씨도 좋고<br /> 여행이나 떠나볼래?
            </div>
        </div>
    );
};

export default Main;
