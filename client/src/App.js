import "./App.css";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
