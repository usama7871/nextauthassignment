"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const SessionWrapper = ({ children }: Props) => {
  return (
    <SessionProvider>
      {/* The children components will have access to the user's session */}
      {children}
    </SessionProvider>
  );
};

export default SessionWrapper;
