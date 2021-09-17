import { Link } from "react-router-dom";
// Style
import "../Style/Components/Header.scss";

import { useState, useEffect } from "react";

const Header = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  return (
    <header className="header">
      <div className="wrapper">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link
                className="header__link header__link--animal"
                style={location === "/" ? { color: "#2a9d8f" } : null}
                to="/"
                onClick={() => setLocation("/")}
              >
                animal
              </Link>
            </li>
            <li className="header__item">
              <Link
                className="header__link header__link--dev"
                style={location === "/dev" ? { color: "#EB5E28" } : null}
                to="/dev"
                onClick={() => setLocation("/dev")}
              >
                dev
              </Link>
            </li>
            <li className="header__item">
              <Link
                className="header__link header__link--history"
                style={location === "/history" ? { color: "#29ABE2" } : null}
                to="/history"
                onClick={() => setLocation("/history")}
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
