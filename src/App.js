import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Breakfast from './components/Food/Breakfast';
import Lunch from './components/Food/Lunch';
import Dinner from './components/Food/Dinner';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Category></Category>
      <Menu></Menu>
      <Breakfast></Breakfast>
      <Lunch></Lunch>
      <Dinner></Dinner>
    </div>
  );
}

export default App;
