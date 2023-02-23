// REACT
import { useContext } from "react";

// CONTEXTS
import { ProductsContext } from "../../contexts/product.context";

// COMPONENTS
import ProductCard from "../../components/product-card/product-card.component";

// STYLES
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;