"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface props{
    children: ReactNode;
}
export default function AuthProvider({ children }: Props) {
    return<SessionProvider>{children</SessionProvider>
}