"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Partnership: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/partnership");
    }, 3000);
  }, [router]);

  return (
    <div className="hero">
      <h1 className="hero__title">Partnership</h1>
      <p className="hero__subtitle">
        Partnership Car Loft is the leading automotive marketplace platform,
        providing a robust set of digital solutions to connect car shoppers with
        sellers. It collaborates with leading brands that are driving the future
        of automotive retail by developing omni-channel experiences that
        inspire, match, and connect tens of millions of car buyers with local
        sellers and OEMs across the country.
      </p>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/public/" alt="backgroung" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Partnership;
