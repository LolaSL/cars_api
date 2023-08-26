import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const InviteFriend = () => {

  return (
   <div className="min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800">
      <h1 className="text-3xl font-bold mb-3 mt-6">Invite A Friend</h1>
      <p>
        Our Recommend a Friend scheme allows you to recommend our service to
        your friends and family. For every friend or family member that sells
        their vehicle to WeWantAnyCar.com using your unique Recommend a Friend
        code, you could receive £30 worth of Love 2 Shop vouchers.
      </p>
      <p>You can earn a maximum of 12 vouchers per year.</p>
      All you have to do is apply online for your unique code, send it on to your friends and ask them to enter the code when prompted.
      <p>To receive your personalised referral code please enter your details below.</p>
      <h2 className="text-2xl font-bold mb-3 mt-6">You personal details</h2>
      <p className=" mb-3 mt-6">
          <i>If you want to send your personnal details feel free to fill out the form here</i>
        </p>
      <div className="link text-md font-bold  mb-4 mt-14">
        <Link href="/contact" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Contact Us
        </Link>
      </div>
          <div className="link text-md font-bold  mb-3 mt-6">
          <Link
          href="/"
          style={{ color: "blue", textDecoration: "none" }}
        > 
   
          {" "}
          Go Back
      </Link></div>
    </div>
    
  );
};

export default InviteFriend;
