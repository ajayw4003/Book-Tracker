import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MyLibrary from "./Components/MyLibrary/MyLibrary";
import AddNewBook from "./Components/AddNewBook/AddNewBook";


function App() {
  const [library, setLibrary] = useState([]);

  return (
    <div>

      <Router>
        <Switch>
          <Route path = "/" exact><MyLibrary  library = {library}/></Route>
          <Route path ="/addNewBook"><AddNewBook library = {library} setLibrary = {setLibrary}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
