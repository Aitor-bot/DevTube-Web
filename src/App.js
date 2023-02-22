import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import HomeVideos from './components/HomeVideos/HomeVideos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='margins'>
      <Categories></Categories>
      <HomeVideos></HomeVideos>
      </div>
    </div>
  );
}

export default App;