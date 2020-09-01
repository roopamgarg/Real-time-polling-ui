import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from './Pages/Landing';
import CreatePoll from './Pages/CreatePoll';
import Poll from './Pages/Poll/Poll';
import Nav from './Components/Nav/Nav';
// using CommonJS modules
// export const Context = React.createContext(io);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>

        <Route path="/" exact component={Landing} />
        <Route path="/create" exact component={CreatePoll} />
        {/* <Context.Provider value={io}> */}

          <Route path="/poll/:id" exact component={Poll} />
        {/* </Context.Provider> */}
      </BrowserRouter>
    </div >
  );
}

export default App;
