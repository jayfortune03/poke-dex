import "./App.css";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pokemon/:id">
          <DetailPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
