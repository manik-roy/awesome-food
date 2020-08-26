import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Breakfast from './Components/breakfast/Breakfast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lunch from './Components/lunch/Lunch';
import Dinner from './Components/dinner/Dinner';
import Mid from './Components/mid/Mid';
import Last from './Components/last/Last';
import Details from './Components/productDetails/Details';
import Review from './Components/review/Review';

function App() {
  return (
    <div >
         <Header></Header>
      <Router>
        <Switch>
          <Route path="/breakfast">
          <Breakfast></Breakfast>
          <Mid></Mid>
          <Last></Last>
          </Route>
          <Route path="/lunch">
          <Lunch></Lunch>
          <Mid></Mid>
          <Last></Last>
          </Route>
          <Route path="/dinner">
          <Dinner></Dinner>
          <Mid></Mid>
          <Last></Last>
          </Route>
          <Route path="/product/:productKey">
          <Details></Details>
          </Route>
          <Route path="/review">
        <Review></Review>
          </Route>
        </Switch>
      </Router><br/><br/><br/>
     
    </div>
  );
}

export default App;
