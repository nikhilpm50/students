import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Subjects from './Components/Subjects';

import Classrooms from './Components/Classrooms';
import Registrations from './Components/Registrations';
import Students from './Students';



function App() {
  return (
    <div className="App">
      
      
        <Router>
          <Switch>
            <Route path='/registrations'>
              <Registrations/>
            </Route>
            
            <Route path='/classroom'>
              <Classrooms />
            </Route>
            
            <Route path='/subjects'>
              <Subjects />
            </Route>
           
            <Route path='/students'>
              <Students/>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
   

    </div >
  );
}

export default App;
