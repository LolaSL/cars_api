import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Heading from "../components/Heading";



const Error:React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text={"404"} tag="h1" />
        <Heading tag="h2" text="Something is going wrong..." />
      </div>
    </div>
  );
};

export default Error;
