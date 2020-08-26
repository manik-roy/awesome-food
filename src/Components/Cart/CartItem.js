import React from 'react';

const CartItem = (props) => {
  const { title, price } = props.item;
  return (
    <li className="list-group-item d-flex my-2 shadow justify-content-between">
      <span>{title}</span> <span> ${price}</span>
    </li>
  );
};

export default CartItem;