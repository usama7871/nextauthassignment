"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import UserCard from "./component/UserCard";
import SignInCard from "./component/SignInCard";

export default function AuthPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {session ? (
        <UserCard session={session} onSignOut={signOut} />
      ) : (
        <SignInCard onSignIn={() => signIn("github")} />
      )}
    </div>
  );
}
