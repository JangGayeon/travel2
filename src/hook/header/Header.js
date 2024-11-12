import React from 'react';
import '../scss/Header.scss'; // 수정된 경로
import logo from '../assets/logo.png';
import userIcon from '../assets/user-icon.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="#course">여행코스</a></li>
                    <li><a href="#destination">여행지</a></li>
                    <li><a href="#event">이벤트</a></li>
                    <li><a href="#mytravel">내 여행</a></li>
                </ul>
            </nav>
            <img src={userIcon} alt="My Page" className="user-icon" />
        </header>
    );
};

export default Header;
