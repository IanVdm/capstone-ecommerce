// STYELS
import './button.styles.scss';

/*
    default btn

    inverted btn

    google sign in btn
*/

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonTypes, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonTypes]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;
