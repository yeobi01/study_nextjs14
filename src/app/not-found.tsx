import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/search">검색</Link>
    </div>
  );
};

export default NotFound;
