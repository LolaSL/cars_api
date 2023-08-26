"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";


const HowItWorks: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/howitworks");
    }, 1000);
  }, [router]);
  return (
      <div className=".page {
        @apply flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto;
        background-color: #f2f2f2; /* Add the grey background color */
      }
      
      .page__title {
        @apply 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold;
      }
      
      .page__subtitle {
        @apply text-[27px] text-black-100 font-light mt-5;
      }
      
      .page__image-container {
        @apply xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen;
      }
      
      .page__image {
        @apply relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;
      }
      
      .page__image-overlay {
        @apply absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden;
      }
      ">
          <h1 className="hero__title">How it works</h1>
          <h2>Say goodbye to manual bookings and paperwork. With Car Loft, you can accept online booking and manage your vehicle fleet, bookings, clients, and payments all in one place. Simplify your operations and increase customer satisfaction.</h2>
          <h3>How old do I need to be to rent a car?</h3>
<p className="hero__subtitle">With many rental companies, you must be at least 21 years of age to rent a car, and any driver under 25 may have to pay a Young Driver Fee. Similarly, people aged 70+ may find some companies will charge a Senior Driver Fee, or may not rent to them at all.
So car rental for the under-25s or over-70s can be more expensive – which is one more reason to book with Rentalcars.com, as we work with all the big brands. Just check each car’s terms and conditions to see if your age would make any difference.</p>
      
      </div>
  )
}

export default HowItWorks;