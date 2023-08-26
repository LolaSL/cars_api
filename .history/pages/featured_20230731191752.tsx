"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";


const Featured: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/featured");
    }, 1000);
  }, [router]);
  return (
      <div>
          <h1>Featured</h1>
      <h2>Coming soon. Accelerate growth</h2>
          <p className="hero__subtitle">Our marketing module includes but is not limited to email and sms campaigns. Detailed analytics on traffic sources helps you analyze your marketing campaigns and manage resources according to data.</p>
      </div>
  )
}

export default Featured;