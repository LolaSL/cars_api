"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const HowItWorks: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/howitwor");
    }, 1000);
    return () => clearTimeout(redirectTimer);
  }, [router]);
  return (
    <div className="page">
      <h1 className="page__title">How it works</h1>
      <h2 className="page__title-second">
        Say goodbye to manual bookings and paperwork. With Car Loft, you can
        accept online booking and manage your vehicle fleet, bookings, clients,
        and payments all in one place. Simplify your operations and increase
        customer satisfaction.
      </h2>
      <h3 className="page__title-third">
        How old do I need to be to rent a car?
      </h3>
      <p className="page__subtitle">
        With many rental companies, you must be at least 21 years of age to rent
        a car, and any driver under 25 may have to pay a Young Driver Fee.
        Similarly, people aged 70+ may find some companies will charge a Senior
        Driver Fee, or may not rent to them at all. So car rental for the
        under-25s or over-70s can be more expensive – which is one more reason
        to book with Rentalcars.com, as we work with all the big brands. Just
        check each car’s terms and conditions to see if your age would make any
        difference.
      </p>
    </div>
  );
};

export default HowItWorks;