// COMPONENTS
import Button from '../button/button.component';

// STYLES
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                
            </div>
            <Button buttonTypes='inverted'>Go To Chekout</Button>
        </div>
    )
}

export default CartDropdown;