// Style
import "./Style/App.scss";
// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from "./Components/Header";
import AnimalView from "./View/AnimalView";
import DevView from "./View/DevView";
import HistoryView from "./View/HistoryView";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AnimalView />
          </Route>
          <Route path="/dev">
            <DevView />
          </Route>
          <Route path="/history">
            <HistoryView />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
