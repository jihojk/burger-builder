import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}> <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            
            </li>
    });

    return (
        <Aux>

            <h3> Order Summary</h3>
            <p> Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Place Order</p>

        </Aux>

    )

};

export default orderSummary;