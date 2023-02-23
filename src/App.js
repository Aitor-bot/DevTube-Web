import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import HomeVideos from './components/HomeVideos/HomeVideos';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='margins'>
      <Categories></Categories>
      <NavigationLinks></NavigationLinks>
      <HomeVideos></HomeVideos>
      
      </div>
    </div>
  );
}

export default App;