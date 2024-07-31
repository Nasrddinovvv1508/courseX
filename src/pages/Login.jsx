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
    // <div className="grid grid-rows-2 min-h-screen w-screen place-items-center ">
    //   <div className='h-1/2 bg-login-circle bg-cover bg-no-repeat bg-red-300'>
    //   </div>

    //   <div>
    //     <Form method="post" className="p-[30px] w-[430px] h-[430px] rounded-3xl border-2 flex flex-col gap-5 items-center">
    //       <h1 className="text-2xl font-semibold">Login</h1>
    //       <FormInput
    //         type="email"
    //         name="email"
    //         label="Email"
    //         status={errors.email}
    //         size={`lg`}
    //       />

    //       <FormInput
    //         type="password"
    //         name="password"
    //         label="Password"
    //         status={errors.password}
    //         size={`lg`}
    //       />

    //       <div className="w-4/6">
    //         {isPending &&
    //           <Button fullWidth loading={true} disabled color="blue" className="flex justify-center">
    //             Contiunie
    //           </Button>
    //         }
    //         {!isPending &&
    //           <Button type="submit" fullWidth className="text-center" color="blue">
    //             Contiunie
    //           </Button>
    //         }
    //       </div>
    //     </Form>
    //   </div>
    // </div>

    <div className='w-screen h-screen bg-white'>
      <div className='h-1/2 bg-login bg-cover bg-no-repeat'>
      </div>

      <Form method="post" className='w-[400px] text-center mx-auto -mt-[230px] bg-white shadow-lg rounded-lg'>
        <div className='px-6 py-10'>
          <h1 className='text-3xl font-bold mt-1 px-2'>Welcome Back, We&apos;ve Missed You!</h1>

          <div className='max-w-9/12 mx-auto flex flex-col items-center gap-6 mt-11'>
            <FormInput status={errors.email} size={`lg`} label="Email" name={"email"} />
            <FormInput status={errors.password} size={`lg`} label="Password" name={"password"} />
          </div>

          <div className='flex items-center w-full gap-2 mt-9 mb-8 justify-center px-2'>
            <div className='w-2/12 border'></div>
            <span className='text-[11px] text-gray-500 font-medium'>
              Did not Register?
              <Link to="/register" className='link text-blue-700 ml-2 text-[12px]'>
                Register
              </Link>
            </span>
            <div className='w-2/12 border'></div>
          </div>

          <div className='w-8/12 text-center flex mx-auto'>
            <Button
              color='blue'
              fullWidth
              type="submit"
              className='inline-block mx-auto'
            >
              Continue
            </Button>
          </div>

        </div>
      </Form>
    </div>
  )
}

export default Login