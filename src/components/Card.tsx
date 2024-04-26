import React, { useState } from 'react';
import '../style/Card.css';

interface CardProps {
  content: string;
  onHover: () => void;
}

const Card: React.FC<CardProps> = ({ content, onHover }) => {
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
        {content}
      </div>
  );
};

export default Card;