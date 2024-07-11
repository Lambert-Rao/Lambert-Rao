import {useState, useEffect} from 'react';
import '@/App.css';
import Gallery from "@/components/Gallery.tsx";
import Header from "@/components/Header.tsx";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function calculateBlur(scrollY: number): string {
    const blur = Math.min(scrollY / 100, 5);
    return `blur(${blur}px)`;
  }

  const aspectRatio = window.innerWidth / window.innerHeight;
  if (aspectRatio < 1/2) {
    return <div>好细的屏幕！</div>;
  }

  return (
      <div className="app">
        <div className="background" style={{filter: calculateBlur(scrollY)}}/>
        <Header/>
        <Gallery/>
      </div>
  );
}

export default App;