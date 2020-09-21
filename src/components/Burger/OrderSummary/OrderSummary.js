import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
render (){
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        return <li key={igKey}> <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            
            </li>
    });
    return (
        <Aux>

            <h3> Order Summary</h3>
            <p> Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong> Total Price: ${this.props.price} </strong></p>
            <p>Place Order</p>
            <Button btnType="Success" clicked={this.props.purchaseContinue}> Continue </Button>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}> Cancel </Button>
        </Aux>

    )
}
    

};

export default OrderSummary;