"use client"

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Businessrelationship: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/businessrelationship");
    }, 3000);
  }, [router]);
  return (
    <div>
      <h1>Business relations and models for a car rental or leasing business</h1>
    
    </div>
  )
}

export default Businessrelationship;