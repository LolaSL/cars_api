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
      <h1></h1>Business repationship</div>
  )
}

export default Businessrelationship;