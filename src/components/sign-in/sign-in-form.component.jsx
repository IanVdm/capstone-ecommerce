// REACT
import { useState } from "react";

// UTILS
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

// COMPONENTS
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// STYLES
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formfields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formfields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Incorrest Password!", error.message);
                    break;
                
                case 'auth/user-not-found':
                    alert("User Not Found/Does Not Exist!", error.message);
                    break;
                
                default:
                    console.log(error.message);
            }
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formfields, [name]: value})
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonTypes='google' onClick={signInWithGoogle} >Google Sign In</Button>    
                </div>
            </form>
        </div>
    )
}

export default SignInForm;