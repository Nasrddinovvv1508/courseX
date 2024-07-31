import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { login } from "../app/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

function useRegister() {
    const [isPending, setIsPending] = useState(false);
    const dispatch = useDispatch();

    const registerWithEmail = async ({ email, password, displayName, photoURL }) => {
        setIsPending(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName,
                photoURL,
            });

            const user = userCredential.user;
            dispatch(login(user));
            toast.success("Register successfully");
            setIsPending(false);
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
            console.error(error);
            setIsPending(false);
        }
    };

    return { registerWithEmail, isPending };
}

export { useRegister };