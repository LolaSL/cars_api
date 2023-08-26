import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";

const blog : React.FC = () => {
    const router = useRouter();
    
    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        router.push("/blog");
      }, 500);
      return () => clearTimeout(redirectTimer);
    }, [router]);
  return (
      <div className={styles.wrapper}>
          <h1></h1>Blog</div>
  )
}

export default blog