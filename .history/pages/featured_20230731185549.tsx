"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";


const Featured: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/featured");
    }, 3000);
  }, [router]);
  return (
      <div>
          <h1>featured</h1>
      
          <p className="hero__subtitle">
      </div>
  )
}

export default Featured