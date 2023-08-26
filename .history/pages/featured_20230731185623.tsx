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
          <h1>Featured</h1>
      <h2></h2>
          <p className="hero__subtitle"></p>
      </div>
  )
}

export default Featured