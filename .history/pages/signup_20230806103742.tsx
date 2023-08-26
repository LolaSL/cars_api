import React from 'react'
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email:""
    })
  return (
    <div>signup</div>
  )
}

export default SignUp;