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
              {data?.user?.name}  <button title={"Logout"}

                onClick={()=>signOut()}
                >Logout</button>
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