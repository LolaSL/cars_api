"use client";
import Link from "next/link";
import React from 'react';
import CustomButton from "./CustomButton";

export default function AuthPrifileMenu() {
    const isAuth = false;
    if (isAuth)
        return (
            <p>
                <CustomButtonbutton>Logout</CustomButtonbutton>
            </p>
        )
}