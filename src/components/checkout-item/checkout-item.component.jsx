// REACT
import { useContext } from 'react';

// CONTEXT
import { CartContext } from '../../contexts/cart.context';

// STYLES
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {    
    const { addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const increaseCartItemQuantity = () => addItemToCart(cartItem);

    const decreaseCartItemQuantity = () => removeItemFromCart(cartItem);

    const clearCartItem = () => clearItemFromCart(cartItem);

    const { name, imageUrl, quantity, price } = cartItem;

    return (
       <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decreaseCartItemQuantity}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={increaseCartItemQuantity}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>

            <div className='remove-button' onClick={clearCartItem}>&#10005;</div>
       </div>
    )
}

export default CheckoutItem;