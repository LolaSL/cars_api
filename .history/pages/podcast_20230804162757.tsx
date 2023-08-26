"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css";

const podcast = () => {
  return (
    <div className={styles.wrapper}>
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
        <Image
          src="/podcast.jpg"
          alt="podcast"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p>
        There’s literally a podcast for everything at this point. “The Pen
        Addict” is a podcast about pens and stationary and it has more than 270
        episodes. There’s a podcast about crowdfunding Christian musicians
        (specifically). There’s even a podcast about people on a UFO forum
        responding to each other. For some reason. And while that’s great, that
        also means there is a lot–a lot–of crap to wade through in order to find
        the good stuff. If you’re looking for the best automotive podcasts, that
        search can take you to some very dark places.
      </p>
      <p>
        So we thought we’d help narrow your search and save you hours upon hours
        of internet dumpster diving. Here are five of the our favorite
        automotive podcasts right now.
      </p>
      <h3>Car Talk</h3>
      <p>
        We might as well start with #1. Car Talk, by NPR, is the top rated
        automotive podcast (and radio show) on the planet. They’ve been
        producing it, in one form or another, for over 30 years. They talk about
        everything from buying trends, to service tips, to repair advice, and
        they’ll make you laugh while doing it. This one isn’t just for auto
        aficionados. Honestly, you don’t really have to know anything about cars
        to enjoy it. Car Talk is just flat out entertaining.
          </p>
          
      <div className="link mt-12">
        <Link
          id="link"
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        >
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default podcast;
