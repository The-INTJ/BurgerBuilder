import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
]

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: <em>{props.price.toFixed(2)}</em></p>
        {controls.map(ctrl => {
            return <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        })}
        <button 
        className="OrderButton"
        disabled={!props.purchasable}
        >ORDER NOW</button>
    </div>
);

export default buildControls;