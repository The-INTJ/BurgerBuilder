import React from 'react';
import './Borger.css'
import BorgerIngredient from './BorgerIngredients/BorgerIngredient';

const borger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BorgerIngredient key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className="Borger">
            <BorgerIngredient type="bread-top" />
            {transformIngredients}
            <BorgerIngredient type="bread-bottom" />
        </div>
    );
};

export default borger;