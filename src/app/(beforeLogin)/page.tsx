import styles from "../page.module.css";
import Image from "next/image";
import zLogo from "../../../public/zlogo.png";
import Link from "next/link";
import Main from "@/app/(beforeLogin)/_component/Main";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/home");
    return null;
  }

  return <Main />;
}
