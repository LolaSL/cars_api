import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import styles from "../styles/styles.module.css";
// import '../app/glogals.css';
const Error:React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <h1>404</h1>
        <h2>Something is going wrong... </h2>
      </div>
    </div>
  );
};

export default Error;
