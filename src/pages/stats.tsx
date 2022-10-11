// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";

// COMPONENTS
import UserAuthed from "components/hooks/userAuthed";

// FC
const Users: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stats</title>
        <meta name="description" content="Check the stats!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Stats
        </h1>
        <div className="flex w-full items-center justify-around pt-6 text-2xl">
          {/* {UserAuthed(
            <ChoreStats />,
            <div className="text-base-content">
              You must be logged in to view stats.
            </div>
          )} */}
          <div className="text-base-content">
            You must be logged in to view stats.
          </div>
        </div>
      </main>
    </>
  );
};

export default Users;
