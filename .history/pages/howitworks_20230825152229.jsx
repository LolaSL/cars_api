"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div
      className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="article__title"> How it works</h1>
      <div className="show__image  mb-3 mt-6 ">
        <Image
          className="responsive"
          width="600"
          height="400"
          src="/comming_soon.png"
          alt="like"
        />
      </div>
      <h2>Help and advice - if the unexpected happens</h2>
      <p className="text-2xl">
        If you have any questions, or something doesn’t go according to your
        plan, just <strong>
        <Link href="/contact" className="flex justify-center items-center">
          Contact Us
        </Link>
        </strong>.
        <h3>If it’s about something that
        happened during your rental, we’ll be able to help you more quickly if
          you provide:</h3>
        <div>
        <ul>
          <li>
            your Booking reference number, and the email address you used when
            you booked your car
          </li>
          <li>
            a summary of the issue, including how you’d like us to help you
            details of anything you’ve been charged
          </li>
          <li>
            any supporting documents (bank statement, rental agreement, final
            invoice, damage documentation, photos, boarding pass, receipts,
            etc.).
          </li>

          <li></li>
        </ul></div>
        If you do that, one of our agents will be in touch as soon as possible.
        They might need to ask you for some more details. Whatever the issue, we
        will try to assist you (which includes handling any request or
        complaint), and will do what we can to help you.
      </p>
      {/* <h3 className="text-2xl font-bold mb-3 mt-6">Coming soon</h3>
      <p className="text-2xl">
        Say goodbye to manual bookings and paperwork. With Car Loft, you can
        accept online booking and manage your vehicle fleet, bookings, clients,
        and payments all in one place. Simplify your operations and increase
        customer satisfaction.
      </p> */}

      <div className="link text-xl font-bold  mb-3 mt-6 text-blue-800">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
