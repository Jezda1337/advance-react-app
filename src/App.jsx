// Style
import "./Style/App.scss";
// react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// API
import { Data } from "./Data/Data";

// Components
import { Header, View } from "./Components";
import { useState, useEffect } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [path, setPath] = useState("animal");
  const [localDev, setLocalDev] = useState([]);
  const [localAnimal, setLocalAnimal] = useState([]);
  const [localHistory, setLocalHistory] = useState([]);

  useState(() => {
    if (localStorage.getItem("path")) {
      setPath(localStorage.getItem("path"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("path", path);
  }, [jokes]);

  async function getData() {
    try {
      setJokes([]);
      const { data } = await Data(path);

      setJokes((prev) => [...prev, data]);

      createLS(data);
    } catch (err) {
      throw err;
    }
  }

  function createLS(data) {
    if (path === "animal") {
      setLocalAnimal((prev) => [...prev, data.value]);
    } else if (path === "dev") {
      setLocalDev((prev) => [...prev, data.value]);
    } else if (path === "history") {
      setLocalHistory((prev) => [...prev, data.value]);
    }
  }

  function uploadLS() {
    switch (path) {
      case "animal":
        localStorage.setItem(path, JSON.stringify(localAnimal));
        break;
      case "dev":
        localStorage.setItem(path, JSON.stringify(localDev));
        break;
      case "history":
        localStorage.setItem(path, JSON.stringify(localHistory));
        break;
      default:
        throw Error;
        break;
    }
  }

  function updateState() {
    const localJokes = JSON.parse(localStorage.getItem(path));
    if (localJokes === null) return;
    switch (path) {
      case "animal":
        setLocalAnimal(localJokes);
        break;
      case "dev":
        setLocalDev(localJokes);
        break;
      case "history":
        setLocalHistory(localJokes);
        break;
      default:
        throw Error;
        break;
    }
  }

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      getData();
    }
    updateState();
  }, [path]);

  useEffect(() => {
    uploadLS();
  }, [jokes, localAnimal, localDev, localHistory, path]);

  function getNewJokes() {
    for (let i = 0; i < 5; i++) {
      getData();
    }
    setJokes([]);
  }

  return (
    <>
      <Router>
        <Header setPath={setPath} path={path} />
        <Switch>
          <Route exact path="/">
            {false ? (
              <Redirect to="/animal" />
            ) : (
              <View
                getNewJokes={getNewJokes}
                jokes={jokes}
                localJokes={localAnimal}
                backgroundColor="#2a9d8f"
              />
            )}
          </Route>
          <Route exact path="/animal">
            <View
              getNewJokes={getNewJokes}
              jokes={jokes}
              localJokes={localAnimal}
              backgroundColor="#2a9d8f"
            />
          </Route>
          <Route exact path="/dev">
            <View
              getNewJokes={getNewJokes}
              jokes={jokes}
              localJokes={localDev}
              backgroundColor="#EB5E28"
            />
          </Route>
          <Route exact path="/history">
            <View
              getNewJokes={getNewJokes}
              jokes={jokes}
              localJokes={localHistory}
              backgroundColor="#29ABE2"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
