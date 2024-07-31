import { FormInput } from "../components"

import { Form, Link, useActionData } from "react-router-dom";

import { useLogin } from "../hooks/useLogin"
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";

export let action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
}

function Login() {
  let userData = useActionData();
  let { singInWithEmail, isPending } = useLogin()

  let [errors, setErrors] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    if (userData) {
      if (userData.email.trim() && userData.password.trim()) {
        singInWithEmail(userData)
      } else {
        setErrors(prev => ({ ...prev, email: "error", password: "error" }))
      }

      if (!userData.email.trim()) {
        setErrors(prev => ({ ...prev, email: "error" }))
        toast.error("Email is required")
      }

      if (!userData.password.trim()) {
        setErrors(prev => ({ ...prev, password: "error" }))
        toast.error("Password is required")
      }
    }
  }, [userData])

  console.log(errors);

  return (
    <div className="grid min-h-screen place-items-center">
      <Form method="post" className="p-[30px] w-[430px] rounded-3xl border-2 flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-semibold">Login</h1>
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

        <div className="w-4/6">
          {isPending &&
            <Button fullWidth loading={true} disabled color="blue" className="flex justify-center">
              Login
            </Button>
          }
          {!isPending &&
            <Button type="submit" fullWidth className="text-center" color="blue">
              Login
            </Button>
          }
        </div>
      </Form>
    </div>
  )
}

export default Login