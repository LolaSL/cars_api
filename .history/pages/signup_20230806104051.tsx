import React from 'react'
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    });
    const { name, email, password } = userInfo;
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value })
    };
    const handleSubmit: FormEventHandler<HTMLFormElement>=async(e)=
  return (
    <div>signup</div>
  )
}

export default SignUp;