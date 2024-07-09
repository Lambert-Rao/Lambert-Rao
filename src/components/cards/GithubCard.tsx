import React from 'react';
import Card from '../Card';
import '../../style/cards/GithubCard.css';
import githubLogo from '../../assets/github-mark.svg';

interface GithubCardProps {
  username: string;
  profileUrl: string;
  onHover: () => void;
}

const GithubCard: React.FC<GithubCardProps> = ({ username, profileUrl, onHover }) => {
  return (
      <div className="github-card">
        <Card onHover={onHover}>
          <img src={githubLogo} alt="Github logo" />
          <a href={profileUrl}>{username}</a>
        </Card>
      </div>
  );
};

export default GithubCard;