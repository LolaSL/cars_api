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
      <h1>Business relations and models for a car rental or leasing business</h1>
      <h2>In order to set up a private limited company, one of the first things you will need to do is register your business with Companies House. To do this, you must have one director and shareholder.</h2>
    </div>
  )
}

export default Businessrelationship;