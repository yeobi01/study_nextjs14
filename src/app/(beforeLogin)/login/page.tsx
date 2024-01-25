"use client";

import Main from "@/app/(beforeLogin)/_component/Main";

/**
 * 클라이언트에서 훅을 이용해서 리다이렉트 해주는 방식
 */
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  router.replace("i/flow/login");
  return <Main />;
}

/*
# 이거는 서버에서 redirect를 해주는 방식

import { redirect } from "next/navigation";

export default function Login() {
  redirect("i/flow/login");
  return null;
}

router.push
localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
뒤로가기 했을 시 /login으로 이동함

router.replace
localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
뒤로가기 했을 시 /로 이동함
히스토리를 없애버려서, 대채하는 방식..
*/
