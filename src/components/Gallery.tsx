import React from 'react';
import Card from "@/components/Card.tsx";
import GithubCard from "@/components/cards/GithubCard.tsx";

const Gallery: React.FC = () => {
  return (
      <div className={"gallery"}>
        <GithubCard
            username="Lambert-Rao"
            profileUrl="https://github.com/lambert-rao"
            onHover={() => { console.log('GithubCard hovered'); }}
        />
        <Card onHover={() => { console.log('Card hovered'); }}><div>Card 1</div></Card>
        <Card onHover={() => { console.log('Card hovered'); }}><div>Card 1</div></Card>
        {/* Repeat the Card component as many times as needed */}
      </div>
  );
};

export default Gallery;