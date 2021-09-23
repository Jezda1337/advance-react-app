// Logo
import Logo from "../Assets/chucky.png";

// Style
import "../Style/View/View.scss";

// Components
import { Card, SeenCard, Loader } from "./";

const View = ({ jokes, localJokes, getNewJokes, backgroundColor }) => {
  return (
    <div>
      <section className="view">
        <div className="wrapper">
          <header className="view__header">
            <figure className="view__logo">
              <a href="https://api.chucknorris.io/">
                <img className="view__logo-img" src={Logo} alt="Logo" />
              </a>
            </figure>
            <button className="btn btn--animal" onClick={getNewJokes}>
              <span
                className="btn__content"
                style={{ backgroundColor: backgroundColor }}
              >
                Get new set of jokes
              </span>
            </button>
          </header>
          <section className="view__cards">
            {jokes.length < 5 && <Loader placeholders={[...Array(5)]} />}
            {jokes.length >= 5 &&
              jokes.map((jk, index) => {
                return (
                  <Card
                    key={index}
                    text={jk.value}
                    background={backgroundColor}
                  />
                );
              })}
          </section>
          <hr />
          <section className="view__seenCards">
            <h2 className="view__subTitle">Already seen jokes</h2>
            {localJokes.map((jk, index) => {
              return (
                <SeenCard key={index} text={jk} background={backgroundColor} />
              );
            })}
          </section>
        </div>
      </section>
    </div>
  );
};

export default View;
