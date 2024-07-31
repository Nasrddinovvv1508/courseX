import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import { login } from "../app/userSlice";
import toast from "react-hot-toast";

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
            toast.error(errorMessage);
        }
    }

    return { signInWithGoogle };
}