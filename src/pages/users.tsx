// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";

// COMPONENTS
import IfAdmin from "components/helpers/ifAdmin";
import PageUnauthed from "components/templates/pageUnauthed";
import UsersAdminAuthed from "components/templates/usersAdminAuthed";

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
          Users
        </h1>
        <div className="flex w-full items-center justify-around pt-6 text-2xl">
          {IfAdmin(<UsersAdminAuthed />, <div>Admin only page</div>)}
        </div>
      </main>
    </>
  );
};

export default Users;
