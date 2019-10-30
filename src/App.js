import React from 'react';
import 'react-router-dom'
import {HashRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Resume from './components/Resume'
import Contactme from './components/Contactme'
import Default from './components/Default'
function App() {
  return (
    <React.Fragment>
    <HashRouter >
        <Switch>
            <Route exact path="/" component={Resume}></Route>
            <Route path="/contactme" component={Contactme}></Route>
            <Route component={Default}></Route>
        </Switch> 
        </HashRouter>   
    </React.Fragment>
  );
}

export default App;
