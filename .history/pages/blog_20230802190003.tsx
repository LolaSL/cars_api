import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";

const blog : React.FC = () => {
    const router = useRouter();
    
    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        router.push("/businessrelationship");
      }, 500);
      return () => clearTimeout(redirectTimer);
    }, [router]);
  return (
    <div className={styles.wrapper}>Blog/div>
  )
}

export default blog