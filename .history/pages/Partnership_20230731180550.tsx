"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Partnership: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/partnership");
    }, 3000);
  }, [router]);

  return (
    <div className="container padding-25">
      <h1>Partnership</h1>
      <p>
        Partnership Car Loft is the leading automotive marketplace platform,
        providing a robust set of digital solutions to connect car shoppers with
        sellers. It collaborates with leading brands that are driving the future
        of automotive retail by developing omni-channel experiences that
        inspire, match, and connect tens of millions of car buyers with local
        sellers and OEMs across the country.
      </p>
    </div>
  );
};

export default Partnership;
