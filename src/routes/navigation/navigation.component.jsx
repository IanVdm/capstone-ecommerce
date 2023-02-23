// REACT
import { Fragment, useContext } from "react";

// UTILS
import { signOutUser } from "../../utils/firebase/firebase.utils";

// ASSETS
import { ReactComponent as Logo } from '../../assets/crown.svg';

// ROUTES
import { Outlet, Link } from "react-router-dom"

// COMPONENTS
import { UserContext } from "../../contexts/user.context";

// STYLES
import './navigation.styles.scss';

// NAVIGATION BAR (TOP LEVEL COMPONENT)
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
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
          </div>
      </div>

      <Outlet />
    </Fragment>
  )
}

export default Navigation;