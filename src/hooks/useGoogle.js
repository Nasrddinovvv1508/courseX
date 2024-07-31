import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from 'react-redux';
import { login } from "../app/userSlice";
import toast from "react-hot-toast";

export function useGoogle() {
    const dispatch = useDispatch();

    let signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            dispatch(login(user)); // Ensure `dispatch` is correctly imported and used
            console.log(user);
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
            console.error("Error during Google sign-in:", error); // Log detailed error
        }
    }

    return { signInWithGoogle };
}