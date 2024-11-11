"use client";
import HomePage from "@/components/home/HomePage";
import UserInfo from "@/components/UserInfo";
import { useState } from "react";

export default function Dashboard() {
  const [showHomePage, setShowHomePage] = useState(false);

  return (
    <>
      {showHomePage ? <HomePage /> : <UserInfo onStudyClick={() => setShowHomePage(true)} />}
    </>
  );
}
