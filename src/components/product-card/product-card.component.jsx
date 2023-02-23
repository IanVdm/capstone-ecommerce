// REACT
import { useContext } from "react";

// CONTEXT
import { CartContext } from "../../contexts/cart.context";

//COMPONENT
import Button from "../button/button.component";

// STYLES
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product);
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />

            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <Button buttonTypes='inverted' onClick={addProductToCart}>Add to cart</Button> 
        </div>
    )
}

export default ProductCard;