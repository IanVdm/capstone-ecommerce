// REACT
import { useContext } from 'react';

// CONTEXT
import { CartContext } from '../../contexts/cart.context';

// COMPONENTS
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

// STYLES
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'> 
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button buttonTypes='inverted'>Go To Chekout</Button>
        </div>
    )
}

export default CartDropdown;