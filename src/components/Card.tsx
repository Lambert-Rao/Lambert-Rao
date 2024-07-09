import React, { useState } from 'react';
import '../style/Card.css';

interface CardProps {
  onHover: () => void;
  children: React.ReactNode; // 添加children属性
}

const Card: React.FC<CardProps> = ({ onHover, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      <div
          className={`card ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        {children} {/* 使用children属性 */}
      </div>
  );
};

export default Card;