"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";


const Featured: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    // Redirect to "/businessrelationship" after 1000ms (1 second)
    const redirectTimer = setTimeout(() => {
      router.push("/businessrelationship");
    }, 1000);

    // Clean up the timer on unmount (optional)
    return () => clearTimeout(redirectTimer);
  }, [router]);
  return (
      <div  className="page">
          <h1 className="page__title">Featured</h1>
      <h2 className="page__title-second">Coming soon. Accelerate growth</h2>
          <p className="page__subtitle">Our marketing module includes but is not limited to email and sms campaigns. Detailed analytics on traffic sources helps you analyze your marketing campaigns and manage resources according to data.</p>
      </div>
  )
}

export default Featured;