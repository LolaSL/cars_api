"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className={`${globals}`}>
      <div
        className="bg-image responsive"
        style={{
          width: "100%",
          height: "120vh",
          opacity: 0.8,
          backgroundImage: `url("/background.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          fontFamily: "sans-serif",
          backgroundRepeat: "no-repeat",
          margin: "0",
          padding: "0",
        }}
      ></div>
      <div
        className="text-overlay"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          right: "-50%",
          padding: "25px",
          transform: "translate(-50%, -50%)",
          textAlign: "justify",
          color: "white",
          zIndex: 10,
          fontSize: "14px",
          fontFamily: "Roboto",
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
        }}
      >
        <h1 className="text-3xl font-bold mb-3 mt-6">Terms </h1>

        <p>
          Duis ea reprehenderit qui excepteur nulla ullamco ipsum. Aliquip
          excepteur proident ex cillum nulla adipisicing duis culpa minim enim
          veniam irure. Amet occaecat sunt commodo non aliquip elit consequat
          commodo sint id id. Deserunt voluptate qui et labore consequat
          exercitation veniam ut ex esse ex magna consequat. Est incididunt
          occaecat exercitation dolore sunt aute. Culpa enim eu ut non ad.
        </p>
        <p>
          Deserunt dolor nisi id fugiat. Nostrud ex consectetur veniam nostrud
          cillum. Qui sit exercitation irure officia deserunt ullamco deserunt
          officia elit ipsum adipisicing duis sunt. Non pariatur occaecat eu
          laboris dolore consequat amet. Non in magna minim duis. Cupidatat id
          deserunt dolor elit id eu tempor dolore ipsum minim minim. Irure
          proident deserunt esse est adipisicing consequat laboris id sunt. Non
          sint officia esse reprehenderit labore sunt ullamco ex tempor cillum
          ea ipsum. Et nostrud ullamco tempor reprehenderit nisi cupidatat ipsum
          officia fugiat amet deserunt. Sint sint dolor Lorem ea est elit eu
          exercitation. Deserunt aute et minim culpa dolore aliqua eu quis elit
          reprehenderit ex exercitation. Quis reprehenderit nulla laboris
          ullamco cupidatat sunt velit cupidatat. Eu dolore exercitation elit
          dolore. Irure consectetur pariatur elit laboris do nulla nostrud ad ea
          est anim sunt nisi cillum.
        </p>
        <div className="link text-md font-bold  mb-3 mt-6">
          <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
            {" "}
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;