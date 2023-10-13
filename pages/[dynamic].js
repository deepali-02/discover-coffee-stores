
import Head from "next/head";
import { useRouter } from "next/router";

const DynamicRoute = () => {
    const router = useRouter();
    console.log("router", router);
  return <div>
      <Head>
          <title>{router.query.dynamic}</title>
          </Head>
          Hi there, I am a {router.query.dynamic} route</div>;
};
export default DynamicRoute;
