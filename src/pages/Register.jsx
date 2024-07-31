import React from "react";
import { FormInput } from "../components";
import { Form, Link, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { useGoogle } from "../hooks/useGoogle";

export let action = async ({ request }) => {
    const formData = await request.formData();
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const photoURL = formData.get("photoURL");

    return { email, password, displayName, photoURL };
};

function Register() {
    const userData = useActionData();
    const { registerWithEmail, isPending } = useRegister();
    const { signInWithGoogle } = useGoogle();

    const [errors, setErrors] = useState({
        displayName: "",
        email: "",
        password: "",
        photoURL: "",
    });

    useEffect(() => {
        if (userData) {
            const { email, password, displayName, photoURL } = userData;

            let hasError = false;

            if (!email.trim()) {
                setErrors(prev => ({ ...prev, email: "error" }));
                hasError = true;
            }
            if (!password.trim()) {
                setErrors(prev => ({ ...prev, password: "error" }));
                hasError = true;
            }
            if (!displayName.trim()) {
                setErrors(prev => ({ ...prev, displayName: "error" }));
                hasError = true;
            }
            if (!photoURL.trim()) {
                setErrors(prev => ({ ...prev, photoURL: "error" }));
                hasError = true;
            }

            if (!hasError) {
                registerWithEmail(userData);
            } else {
                toast.error("Enter the fields correctly");
            }
        }
    }, [userData, registerWithEmail]);

    return (
        <div className="grid min-h-screen place-items-center bg-[#17222b]">
            <div className="main-container h-[352px] rounded-3xl bg-[#34404a]">
                <Form method="post" className="absolute z-10 top-[50%] left-[50%] bg-[#e3e7f7] translate-x-[-50%] translate-y-[-50%] p-[30px] w-[430px] h-[520px] rounded-3xl flex flex-col gap-5 items-center">
                    <h1 className="text-2xl font-semibold">Register</h1>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        status={errors.displayName}
                        size="lg"
                        className="border-black"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        status={errors.email}
                        size="lg"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        status={errors.password}
                        size="lg"
                    />
                    <FormInput
                        type="text"
                        name="photoURL"
                        label="Photo URL"
                        status={errors.photoURL}
                        size="lg"
                    />
                    <div className="w-4/6">
                        {isPending ? (
                            <Button fullWidth loading={true} disabled color="blue" className="flex justify-center">
                                Register
                            </Button>
                        ) : (
                            <Button type="submit" fullWidth className="text-center" color="blue">
                                Register
                            </Button>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Already registered?</p>
                        <Link to="/login">
                            <p className="text-blue-500">Login</p>
                        </Link>
                    </div>
                    <div className="w-full">
                        <Button
                            fullWidth
                            variant="outlined"
                            color="blue-gray"
                            className="flex items-center justify-center gap-3 bg-white"
                            onClick={signInWithGoogle}
                        >
                            <img src="https://docs.material-tailwind.com/icons/google.svg" alt="google" className="h-6 w-6" />
                            Continue with Google
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register;