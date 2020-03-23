import React, { useState } from 'react';
import fakeFoods from '../../fakeFoods/foods';
import Breakfast from '../Food/Breakfast';
import Lunch from '../Food/Lunch';
import Dinner from '../Food/Dinner';

const Menu = () => {
    const jsonFoods = fakeFoods;
    //console.log(jsonFoods);
    const [foods, setFoods] = useState(jsonFoods);
    return (
        <div className="foods-container">
            {
                foods.map(food => <Breakfast food={food}></Breakfast>)
            }
            {
                foods.map(food => <Lunch food={food}></Lunch>)
            }
            {
                foods.map(food => <Dinner food={food}></Dinner>)
            }
        </div>
    );
};

export default Menu;