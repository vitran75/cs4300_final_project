import LoginForm from "@/components/LoginForm";
import Homepage from "@/components/home/Homepage";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main>
      {/* Render the Homepage component */}
      <Homepage />
      {/* Optionally, keep LoginForm or remove it */}
    </main>
  );
}
