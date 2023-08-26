import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";




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
        <h1>404</
        <Heading tag="h2" text="Something is going wrong..." />
      </div>
    </div>
  );
};

export default Error;
