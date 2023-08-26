"use client";
import Link from "next/link";
import React from 'react';
import CustomButton from "./CustomButton";

export default function AuthPrifileMenu() {
    const isAuth = false;
    if (isAuth)
        return (
            <p>
                <CustomButton title={"Logout"}></CustomButton>
            </p>
        );
    return (
        <ul>
            <li>
                <Link href="/auth/signin">Signin</Link>
            </li>
            <li>
                <Link href="/auth/signup">Signup</Link>
            </li>
        </ul>
    )
};