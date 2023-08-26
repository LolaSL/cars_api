import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { InputErros } from '../types'
import { getErrorMsg, loginUser } from '../helpers'
import { useRouter } from 'next/router'
import axios, { AxiosError } from 'axios'

import Link from "next/link";


const SignupForm = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
})

const [validationErrors, setValidationErrors] = useState<InputErros[]>([])
const [submitError, setSubmitError] = useState<string>("")
const [loading, setLoading] = useState(false)
const router = useRouter()

const validateData = (): boolean => {
    const err = []

    if (data.fullName?.length < 4) {
        err.push({ fullName: "Full name must be atleast 4 characters long" })
    }
    else if (data.fullName?.length > 30) {
        err.push({ fullName: "Full name should be less than 30 characters" })
    }
    else if (data.password?.length < 6) {
        err.push({ password: "Password should be atleast 6 characters long" })
    }
    else if (data.password !== data.confirmPassword) {
        err.push({ confirmPassword: "Passwords don't match" })
    }

    setValidationErrors(err)

    if (err.length > 0) {
        return false
    }
    else {
        return true
    }
}

const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValid = validateData()

    if (isValid) {
        // sign up

        try {
            setLoading(true)
            const apiRes = await axios.post("http://localhost:3000/api/auth/signup", data)

            if (apiRes?.data?.success) {
                // save data in session using next auth

                const loginRes = await loginUser({
                    email: data.email,
                    password: data.password
                })

                if (loginRes && !loginRes.ok) {
                    setSubmitError(loginRes.error || "")
                }
                else {
                    router.push("/")
                }
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                const errorMsg = error.response?.data?.error
                setSubmitError(errorMsg)
            }
        }

        setLoading(false)
    }
}

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // We get property name from event.target.name and set the value from onChange in it
    // So name in our input component should be same as the property in data state

    setData({ ...data, [event.target.name]: event.target.value })
}
    // const [fullname, setFullname] = useState("");
    // const [password, setPassword] = useState("");
    // const[confirmPassword, setConfirmPassword]=useState("")
    // const [email, setEmail] = useState("");
    //   const [error, setError] = useState([]);
    // const [success, setSuccess] = useState(false);
  
    // const handleSubmit = async (e: { preventDefault: () => void }) => {
    //   e.preventDefault();
  
  
    //   const res = await fetch("api/singup", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       fullname,
    //       password,
    //       email,
    //       confirmPassword,
    //     }),
    //   });
  
    //   const { msg, success } = await res.json();
    //   setError(msg);
    //   setSuccess(success);
  
    //   if (success) {
    //     setFullname("");
    //     setPassword("");
    //     setEmail("");
    //     setConfirmPassword("")
    //   }
    // };

    return (

        <div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
        <h1 className="text-3xl font-bold mb-3 mt-6">Sign Up</h1>
     
         <div className="p-6 justify-center items-center h-screen flexbox">
           <form
             onSubmit={handleSignup}
             className="form py-4 mt-4 border-t flex flex-col gap-5"
           >
             <div>
               <label htmlFor="fullname">Full Name</label>
               <input
                 className="input rounded-md"
                 onChange={(e) => setFullname(e.target.value)}
                 value={fullname}
                 type="text"
                 id="fullname"
                 placeholder="John Doe"
               />
             </div>
              <div>
               <label htmlFor="email">Email</label>
               <input
                 className="input rounded-md"
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}
                 type="text"
                 id="email"
                 placeholder="john@gmail.com"
               />
             </div>
 
             <div>
               <label htmlFor="password">Your Reg</label>
               <input
                 className="input rounded-md"
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}
                 type="text"
                 id="password"
                 placeholder="Password"
               />
             </div>
             <div>
               <label htmlFor="confirmPassword">Your Message</label>
               <input
                 onChange={(e) => setConfirmPassword(e.target.value)}
                 value={confirmPassword}
                 className="input rounded-md"
                 id="confirmPassword"
                 placeholder="Confirm your password here..."
               ></input>
             </div>
 
             <button
               className="bg-green-700 p-3 text-white font-bold rounded-md"
               type="submit"
             >
               Send
             </button>
           </form>
           <div className="bg-slate-100 flex flex-col rounded-md">
             {error &&
               error.map((e, i) => (
                 <div key={i}
                   className={`${
                     success ? "text-green-800" : "text-red-600"
                   } px-5 py-2`}
                 >
                   {e}
                 </div>
               ))}
           </div>
       
       </div>
       <div className="link text-md font-bold  mb-4 mt-14">
           <Link
           href="/"
           style={{ color: "blue", textDecoration: "none" }}
         > 
    
           {" "}
           Go Back
       </Link></div>
     </div>
    )
}

export default SignupForm