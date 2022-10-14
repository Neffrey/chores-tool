// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

// COMPONENTS
import AuthedIfElse from "components/hooks/authedIfElse";
import AccountAuthed from "components/templates/accountAuthed";
import AccountUnauthed from "components/templates/accountUnauthed";

const Account: NextPage = () => {
  // SESSION
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Account</title>
        <meta name="description" content="View & Edit Account Details" />
        <link rel="icon" href="/CircleLogoIco.ico" />
      </Head>

      <main className="min-w-full">
        {AuthedIfElse(<AccountAuthed />, <AccountUnauthed />)}
      </main>
    </>
  );
};

export default Account;
