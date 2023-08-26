"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css";


const podcast = () => {
  return (
      <div>
          <h1>Podcast</h1>
          <h2>5 Automotive Podcasts You Should Be Listening to Right Now</h2>
          <div
        className="show__image"
        style={{
          borderRadius: "3%",
          overflow: "hidden",
          width: "378px",
          height: "230px",
          position: "relative",
        }}
      >
        <Image src="/car_show.png" alt="cars" layout="fill" objectFit="cover" />
      </div>
          
          <div className="link mt-12">
      <Link
          id="link"
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        >
          {" "}
          Go Back
        </Link></div>
    </div>

  )
}

export default podcast