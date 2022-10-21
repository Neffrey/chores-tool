// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";

// COMPONENTS
import IfAuth from "components/hooks/ifAuth";
import PageUnauthed from "components/templates/pageUnauthed";
import StatsAuthed from "components/templates/statsAuthed";

// FC
const Users: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stats</title>
        <meta name="description" content="Check the stats!" />
        <link rel="icon" href="/CircleLogoIco.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Stats
        </h1>
        <div className="flex w-full items-center justify-around pt-6 text-2xl">
          {IfAuth(<StatsAuthed />, <PageUnauthed />)}
        </div>
      </main>
    </>
  );
};

export default Users;
