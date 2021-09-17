// Hooks
import { useState, useEffect } from "react";

// Style
import "../Style/View/View.scss";
// Data
import { Data } from "../Data/Data";
import Logo from "../Assets/chucky.png";
// Components
import Card from "../Components/Card";
import SeenCard from "../Components/SeenCard";

import Loader from "../Components/Loader";

const DevView = () => {
  const [devJokes, setDevJokes] = useState([]);
  const [localJokes, setLocalJokes] = useState([]);
  const backgroundColor = "#EB5E28";

  const getData = async (category) => {
    try {
      const { data } = await Data(category);
      setDevJokes((prevJokes) => [...prevJokes, data]);
      setLocalJokes((prevLocalJokes) => [...prevLocalJokes, data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      getData("dev");
    }

    const localJokes = JSON.parse(localStorage.getItem("devJokes"));
    if (localJokes === null) {
      localStorage.setItem("devJokes", JSON.stringify([]));
    } else {
      setLocalJokes(localJokes);
    }
    return () => {
      setDevJokes([]);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("devJokes", JSON.stringify(localJokes));
  }, [devJokes, localJokes]);

  const getNewJokes = () => {
    for (let i = 0; i < 5; i++) {
      getData("dev");
    }
    setDevJokes([]);
  };

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
            <button className="btn btn--dev" onClick={getNewJokes}>
              <span
                className="btn__content"
                style={{ backgroundColor: backgroundColor }}
              >
                Get new set of jokes
              </span>
            </button>
          </header>
          <section className="view__cards">
            {devJokes.length < 5 && <Loader placeholders={[...Array(5)]} />}
            {devJokes.length >= 5 &&
              devJokes.map((jk, index) => {
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
                <SeenCard
                  key={index}
                  text={jk.value}
                  background={backgroundColor}
                />
              );
            })}
          </section>
        </div>
      </section>
    </div>
  );
};

export default DevView;
