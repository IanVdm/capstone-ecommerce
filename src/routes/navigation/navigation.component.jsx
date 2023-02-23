// REACT
import { Fragment, useContext } from "react";

// UTILS
import { signOutUser } from "../../utils/firebase/firebase.utils";

// ASSETS
import { ReactComponent as Logo } from '../../assets/crown.svg';

// ROUTES
import { Outlet, Link } from "react-router-dom"

// CONTEXTS
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

// COMPONENTS
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// STYLES
import './navigation.styles.scss';

// NAVIGATION BAR (TOP LEVEL COMPONENT)
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <Fragment>
      <div className="navigation">
          <Link className="logo-container" to={'/'}>
            <Logo className="logo"/>
          </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to={'/shop'}>SHOP</Link> 
            {currentUser ? (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>) : (<Link className="nav-link" to={'/auth'}>SIGN IN</Link>)}
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  )
}

export default Navigation;