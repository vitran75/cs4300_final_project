import Image from "next/image";
import styles from "./page.module.css";
import RegisterButton from "./components/RegisterButton";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <>
      <RegisterButton />
      <LoginButton />
    </>
  );
}
