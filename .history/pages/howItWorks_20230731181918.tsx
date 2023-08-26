"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const HowItWorks: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/partnership");
    }, 3000);
  }, [router]);
  return (
      <div>
          <h1>How it works</h1>
          <h2>How old do I need to be to rent a car?</h2>
<p>With many rental companies, you must be at least 21 years of age to rent a car, and any driver under 25 may have to pay a Young Driver Fee. Similarly, people aged 70+ may find some companies will charge a Senior Driver Fee, or may not rent to them at all.
So car rental for the under-25s or over-70s can be more expensive – which is one more reason to book with Rentalcars.com, as we work with all the big brands. Just check each car’s terms and conditions to see if your age would make any difference.</p>
      </div>
  )
}

export default HowItWorks