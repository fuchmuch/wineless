import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home';

import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>

          <Route
            path="/Home"
            component={() => <Home />}
          />
    
          {/* <Route
            path="/Stores"
            component={() => <Stores />}
          />
           */}

        </Switch>
      </main>
      {/* <GoogleMap /> */}
    </div>
  );
}

export default App;
