// FIREBASE
import { initializeApp } from "firebase/app";
import { getAuth,
         signInWithPopup,
         GoogleAuthProvider,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
        } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr1y9HY66khEe9cIsxVvZ3GWyApYEKwaw",
  authDomain: "capstone-db-9a61a.firebaseapp.com",
  projectId: "capstone-db-9a61a",
  storageBucket: "capstone-db-9a61a.appspot.com",
  messagingSenderId: "1043768994803",
  appId: "1:1043768994803:web:d4e06fc05c3dcd6ad9c086"
};

// Initialize Firebase
// const firebaseApp = 
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("Error createing the user!", error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return ;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    if (!callback) {
        console.log("No callback found!");
        return;
    }
    onAuthStateChanged(auth, callback);
}