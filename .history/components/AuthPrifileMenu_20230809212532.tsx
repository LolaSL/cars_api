"use client";
import Link from "next/link";
import React from 'react';

export default function AuthPrifileMenu() {
    const isAuth = false;
    if (isAuth)
        return (
            <p>
                <button>Logout</button>
            </p>
        )
}