import React, { useState, useEffect } from 'react';
import './App.css';
import FoodItem from './Components/Foods/FoodItem';
import CartItem from './Components/Cart/CartItem';

function App() {
  const [cart, setCart] = useState([]);
  
  const [foods, setFoods] = useState([])

  // Fetch foods form server
  useEffect(() => {
    fetch('https://hot-onion.herokuapp.com/api/v1/foods')
      .then(res => res.json())
      .then(res => {
        setFoods(res.data.foods)
      })
  }, [])

  // add item to cart
  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart)
  }

  // get total Price
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <div className="container-fluid px-2">
      <h2 className="text-center py-4 logo">Awesome Foods</h2>
      <div className="row food-items">
        <div className="col-md-9 row border-right">
          {foods.map(food => <FoodItem key={food._id} food={food} addToCart={addToCart} />)}
        </div>
        <div className="col-md-3">
          <h2 className="text-center">Cart  {cart.length} </h2>
          <ul className="list-group">
            {cart.map(item => <CartItem item={item} />)}
          </ul>
          <button type="button" className="btn btn-primary btn-block">
            Checkout <span className="badge badge-light">$ {totalPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
}


export default App;