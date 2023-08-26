"use client";
import Link from "next/link";
import React from 'react';
import CustomButton from "./CustomButton";
import {signOut, useSession} from "next-auth/react"

export default function AuthPrifileMenu() {
    const { data, status } = useSession();
    
    const isAuth = status === 'authenticated';
    if (isAuth)
        return (
            <p>
              {data?.user?.name}  <utton title={"Logout"}
                btnType='button'
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                onClick={()=>signOut()}
                >Logout</utton>
            </p>
        );
    return (
        <ul>
            <li>
                <Link href="/signin">Signin</Link>
            </li>
            <li>
                <Link href="/signup">Signup</Link>
            </li>
        </ul>
    )
};