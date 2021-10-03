import React from "react";
import {
  BrowserRouter as Router,
  Switch as SwitchRouter,
  Route,
} from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <SwitchRouter>
          <Route path="/">
            <HomeScreen />
          </Route>
        </SwitchRouter>
      </Router>
    </div>
  );
}

export default App;
