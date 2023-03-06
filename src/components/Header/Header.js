import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import Sidebar from '../Sidebar/Sidebar';

function Header() {
  return (
    <div className="header_container">
      <Sidebar />
      <SearchBar />

    </div>
  );
}

export default Header;