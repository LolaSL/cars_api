import React, {  useState } from "react";

const InviteFriend = () => {
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);

    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });
  return (
    <div>
      <h1>Invite A Friend</h1>
      <p>
        Our Recommend a Friend scheme allows you to recommend our service to
        your friends and family. For every friend or family member that sells
        their vehicle to WeWantAnyCar.com using your unique Recommend a Friend
        code, you could receive £30 worth of Love 2 Shop vouchers.
      </p>
      <p>You can earn a maximum of 12 vouchers per year.</p>
      All you have to do is apply online for your unique code, send it on to your friends and ask them to enter the code when prompted.
      <p>To receive your personalised referral code please enter your details below.</p>
      <h2>You personal details</h2>
      
    </div>
  );
};

export default InviteFriend;
