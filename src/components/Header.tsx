import React from 'react';
import '@/style/Header.css';
import avatarImg from '@/assets/logo_animated.svg';

const Header: React.FC = () => {
  return (
      <div className="header">
        <div className="avatar-container">
          <img src={avatarImg} alt="Avatar" className="avatar"/>
        </div>
        <div className="title-container">
          <h1 className="main-title">Lambert's Home</h1>
          <h2 className="sub-title">この宇宙を抱いて輝く  少年よ神話になれ</h2>
        </div>
      </div>
  );
};

export default Header;