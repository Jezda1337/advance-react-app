import { Link } from 'react-router-dom';
// Style
import '../Style/Components/Header.scss';

const Header = ({ setPath, path }) => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <nav className='header__nav'>
          <ul className='header__list'>
            <li className='header__item'>
              <Link
                className='header__link header__link--animal'
                style={path === 'animal' ? { color: '#2a9d8f' } : null}
                to='/animal'
                onClick={(e) => setPath(e.target.innerHTML)}
              >
                animal dskljhgldfshkljghdfklghkl
              </Link>
            </li>
            <li className='header__item'>
              <Link
                className='header__link header__link--dev'
                style={path === 'dev' ? { color: '#EB5E28' } : null}
                to='/dev'
                onClick={(e) => setPath(e.target.innerHTML)}
              >
                dev
              </Link>
            </li>
            <li className='header__item'>
              <Link
                className='header__link header__link--history'
                style={path === 'history' ? { color: '#29ABE2' } : null}
                to='/history'
                onClick={(e) => setPath(e.target.innerHTML)}
              >
                history
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
