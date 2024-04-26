import React from 'react';
import '../style/Header.css';

const Header: React.FC = () => {
  return (
      <div className="header">
        <div className="avatar-container">
          <img src="src/assets/logo.svg" alt="Avatar" className="avatar"/>
        </div>
        <div className="title-container">
          <h1 className="main-title">Main Title</h1>
          <h2 className="sub-title">Sub Title</h2>
        </div>
      </div>
  );
};

export default Header;