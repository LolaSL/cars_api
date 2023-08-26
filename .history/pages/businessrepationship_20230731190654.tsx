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
    <div>Businessrepationship</div>
  )
}

export default Businessrepationship