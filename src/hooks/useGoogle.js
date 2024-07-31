import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import { login } from "../app/userSlice";

export function useGoogle() {
    let signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            let result = await signInWithPopup(auth, provider);
            let user = result.user;
            dispatch(login(user));
            console.log(user);
        } catch (error) {
            const errorMessage = error.message;
            // alert(`Error`)
        }
    }

    return { signInWithGoogle };
}