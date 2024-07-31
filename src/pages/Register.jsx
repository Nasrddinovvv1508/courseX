import { FormInput } from "../components";
import { Form, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";

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

    let [errors, setErrors] = useState({
        displayName: "",
        email: "",
        password: "",
        photoURL: "",
    })

    useEffect(() => {
        if (userData) {
            if (userData.email.trim() && userData.password.trim() && userData.displayName.trim() && userData.photoURL.trim()) {
                registerWithEmail(userData);
            } else {
                setErrors(prev => ({ ...prev, email: "error", password: "error", displayName: "error", photoURL: "error" }))
                toast.error("Enter the fields correctly")
            }

            if (!userData.displayName.trim()) {
                setErrors(prev => ({ ...prev, displayName: "error" }))
            }

            if (!userData.email.trim()) {
                setErrors(prev => ({ ...prev, email: "error" }))
            }

            if (!userData.password.trim()) {
                setErrors(prev => ({ ...prev, password: "error" }))
            }

            if (!userData.photoURL.trim()) {
                setErrors(prev => ({ ...prev, photoURL: "error" }))
            }
        }
    }, [userData]);

    return (
        <div className="grid min-h-screen place-items-center">
            <Form method="post" className="p-[30px] w-[430px] rounded-3xl border-2 flex flex-col gap-5 items-center">
                <h1 className="text-2xl font-semibold">Register</h1>
                <FormInput
                    type="text"
                    name="displayName"
                    label="Display Name"
                    status={errors.displayName}
                />

                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    status={errors.email}
                />

                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    status={errors.password}
                />

                <FormInput
                    type="text"
                    name="photoURL"
                    label="Photo URL"
                    status={errors.photoURL}
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
            </Form>
        </div>
    );
}

export default Register;