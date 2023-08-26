import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { InputErros } from '../types'
import { getErrorMsg, loginUser } from '../helpers'
import { useRouter } from 'next/router'
import axios, { AxiosError } from 'axios'
import { ErrorText } from './InputFeildElements'
import Link from "next/link";
import globals from "../app/globals.css";

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

    const validateData = () => {
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

    return (

        <div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
        <h1 className="text-3xl font-bold mb-3 mt-6">Contact Us</h1>
         <h2 className="text-2xl font-bold mb-3 mt-6">
         Please fill in the form below
         </h2>
         <div className="p-6 justify-center items-center h-screen flexbox">
           <form
             onSubmit={handleSubmit}
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
               <label htmlFor="reg">Your Reg</label>
               <input
                 className="input rounded-md"
                 onChange={(e) => setReg(e.target.value)}
                 value={reg}
                 type="text"
                 id="reg"
                 placeholder="GF23XWD"
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
               <label htmlFor="message">Your Message</label>
               <textarea
                 onChange={(e) => setMessage(e.target.value)}
                 value={message}
                 className="h-32 textarea rounded-md"
                 id="message"
                 placeholder="Type your message here..."
               ></textarea>
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