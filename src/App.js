import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';
import HomeVideos from './components/HomeVideos/HomeVideos';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import DevelopersList from './components/DevelopersList/DevelopersList';
import CreatorProfile from './components/CreatorProfile/CreatorProfile';
import News from './components/News/News';

function App() {
  return (
    <Router>
      <Header />
      <div className='margins'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:videoId" element={<WatchVideo />} />
        <Route path="/creator/:creatorName" element={<CreatorProfile />} />
        <Route path="/news" element={<News />} />
      </Routes>
      </div>

    </Router>
  );
}

function HomePage() {
  const [selectedLink, setSelectedLink] = useState('newvideos');
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div>
      <Categories onCategoryClick={handleCategoryClick} />
      <NavigationLinks onLinkClick={handleLinkClick} />
      {selectedLink === 'newvideos' ? (
        <HomeVideos category={currentCategory} /> 
      ) : (
        <DevelopersList />
      )}
    </div>
  );
}

function WatchVideo() {
  const { videoId } = useParams();

  return (
    <div className='margins'>
      <VideoPlayer videoId={videoId} />
    </div>
  );
}

export default App;
