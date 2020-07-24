import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li><bold>{igKey}</bold>: {props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <h3>Your Orders</h3>
            <p>A delicious B O R G E R. It doeth <em>contain:</em></p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
        </Aux>
    )
};

export default orderSummary;