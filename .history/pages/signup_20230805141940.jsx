"use client";

import React, { useState } from "react";
import globals from "../app/globals.css";
import Link from "next/link";
import axios from "axios"

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Your Password: ", password);
    console.log("Confirm Password: ", confirmPassword);

    const formData = {
      fullname,
      email,
      password,
      confirmPassword,
    };
    const res = await axios.post("api/a", formData);

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setPassword("")
      setConfirmPassword("")
    }
  };
  return (
    <div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
      <h1 className="text-3xl font-bold mb-3 mt-6">Sign UP</h1>
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
            <label htmlFor="password"> Password</label>
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="input rounded-md"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="text"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
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
              <div
                key={i}
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
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Contact;

// "use client";

// import React, { useState } from 'react';
// import { InputErrors } from '../types/index';
// import { loginUser } from '../helpers';
// import { useRouter } from 'next/router';
// import axios, { AxiosError } from 'axios';
// import Link from "next/link";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [validationErrors, setValidationErrors] = useState<InputErrors[]>([]);
//   const [submitError, setSubmitError] = useState<string>("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const validateData = (): boolean => {
//     const errors = [];

//     if (formData.fullName.length < 4) {
//       errors.push({ fullName: "Full name must be at least 4 characters long" });
//     } else if (formData.fullName.length > 30) {
//       errors.push({ fullName: "Full name should be less than 30 characters" });
//     } else if (formData.password.length < 6) {
//       errors.push({ password: "Password should be at least 6 characters long" });
//     } else if (formData.password !== formData.confirmPassword) {
//       errors.push({ confirmPassword: "Passwords don't match" });
//     }

//     setValidationErrors(errors);

//     if (errors.length > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const isValid = validateData();

//     if (isValid) {
//       // sign up
//       try {
//         setLoading(true);
//         const apiRes = await axios.post("http://localhost:3000/api/auth/signup", formData);

//         if (apiRes?.data?.success) {
//           // save data in session using next auth
//           const loginRes = await loginUser({
//             email: formData.email,
//             password: formData.password
//           });

//           if (!loginRes) {
//             setSubmitError("Login failed");
//           } else {
//             router.push("/");
//           }
//         }
//       } catch (error: unknown) {
//         if (error instanceof AxiosError) {
//           const errorMsg = error.response?.data?.error;
//           setSubmitError(errorMsg);
//         }
//       }

//       setLoading(false);
//     }
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // We get property name from event.target.name and set the value from onChange in it
//     // So name in our input component should be the same as the property in data state
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   // const getErrorMsgForField = (field: string): string | undefined => {
//   //   const error = validationErrors.find((err) => err.hasOwnProperty(field));
//   //   return error ? error[field] : undefined;
//   // };

//   return (
//     <div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
//       <h1 className="text-3xl font-bold mb-3 mt-6">Sign Up</h1>

//       <div className="p-6 justify-center items-center h-screen flexbox">
//         <form onSubmit={handleSignup} className="form py-4 mt-4 border-t flex flex-col gap-5">
//           <div>
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               className="input rounded-md"
//               onChange={handleInputChange}
//               value={formData.fullName}
//               type="text"
//               id="fullName"
//               placeholder="John Doe"
//               required
//             />
//             {/* {getErrorMsgForField("fullName") && (
//               <p className="text-red-500 font-bold">{getErrorMsgForField("fullName")}</p>
//             )} */}
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               className="input rounded-md"
//               onChange={handleInputChange}
//               value={formData.email}
//               type="text"
//               id="email"
//               placeholder="john@gmail.com"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password">Your Reg</label>
//             <input
//               className="input rounded-md"
//               onChange={handleInputChange}
//               value={formData.password}
//               type="password"
//               id="password"
//               placeholder="Password"
//               required
//             />
//             {/* {getErrorMsgForField("password") && (
//               <p className="text-red-500 font-bold">{getErrorMsgForField("password")}</p>
//             )} */}
//           </div>
//           <div>
//             <label htmlFor="confirmPassword">Your Message</label>
//             <input
//               onChange={handleInputChange}
//               value={formData.confirmPassword}
//               className="input rounded-md"
//               id="confirmPassword"
//               type="password"
//               placeholder="Confirm your password here..."
//               required
//             />
//             {/* {getErrorMsgForField("confirmPassword") && (
//               <p className="text-red-500 font-bold">{getErrorMsgForField("confirmPassword")}</p>
//             )} */}
//           </div>

//           <button className="bg-green-700 p-3 text-white font-bold rounded-md" type="submit">
//             Send
//           </button>
//           {submitError && <p className="font-size-bold m-2">{submitError}</p>}
//         </form>
//       </div>
//       <div className="link text-md font-bold mb-4 mt-14">
//         <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
//           {" "}
//           Go Back
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;
