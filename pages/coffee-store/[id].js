import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  // console.log("router", router);
  return <div>Coffee stores Page {router.query.id}
  <br/>
  <Link href="/">Back to Home</Link>
  <br/>
  <Link href="/coffee-store/dynamic">Go to dynamic Page</Link>
  </div>;
};

export default CoffeeStore;
