// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

// COMPONENTS
import IfAuth from "components/hooks/ifAuth";
import AccountAuthed from "components/templates/accountAuthed";
import PageUnauthed from "components/templates/pageUnauthed";

const Account: NextPage = () => {
  // SESSION
  // const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Account</title>
        <meta name="description" content="View & Edit Account Details" />
        <link rel="icon" href="/CircleLogoIco.ico" />
      </Head>

      <main className="min-w-full">
        {IfAuth(<AccountAuthed />, <PageUnauthed />)}
      </main>
    </>
  );
};

export default Account;
