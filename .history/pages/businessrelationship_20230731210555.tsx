"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/404.module.css";

const Businessrelationship: React.FC = () => {
  const router = useRouter();
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function () { scrollFunction() };
  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
  useEffect(() => {
    setTimeout(() => {
      router.push("/businessrelationship");
    }, 1000);
  }, [router]);
  return (
    <div className={styles.wrapper}>
      <button onClick="topFunction()" id="myBtn" title="Go to top">Top</button>
      <h1>
        Business relations and models for a car rental or leasing business
      </h1>
      <p >
        In order to set up a private limited company, one of the first things
        you will need to do is register your business with Companies House. To
        do this, you must have one director and shareholder. At the same time,
        you will also have to consider best set up method for your business
        idea.
      </p>
      <h2>
        Here’s a look at the different ways that you can set up your business:
      </h2>
      <h3>Sole Proprietorship</h3>
      <p>
        Widely recognised as one of the easiest and most cost-efficient options
        when it comes to setting up a car leasing or car rental entity, this
        option allows you to create a business without the need for legal
        representation. However, a major downside to this option is that you
        might find it difficult to secure funding from investors, and you will
        also be financially liable for all areas of your business.
      </p>
      <h3>Partnership</h3>
      <p>
        Extremely similar to the Sole Proprietorship, this option allows
        individuals to join or contribute to the funding of your car rental
        business at any stage in your company formation.
      </p>
      <h3>Limited Company</h3>
      <p>
        A limited company is a separate and distinct legal entity, which will
        allow you to trade, open a bank account and obtain a tax identification
        number – all under your business name. However, if you decide to set up
        your business in this way, it’s important to recognise that you will be
        held personally liable for company liabilities or debts.
      </p>
      <h3>Car rental franchise</h3>
      <p>
        Another option for tapping into the car leasing or car rental market is
        to buy into a franchise. A car rental franchised dealership is an auto
        seller that sells new and used cars for different car manufacturers.
        They are also known as new car dealers, used car dealers, automobile
        dealers.
      </p>
    </div>
  );
};

export default Businessrelationship;