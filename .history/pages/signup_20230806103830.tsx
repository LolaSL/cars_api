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
    const handleChange
  return (
    <div>signup</div>
  )
}

export default SignUp;