// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";

// COMPONENTS
import AddChoreForm from "components/organisms/addChoreForm";
import AllChoresTable from "components/molecules/allChoresTable";

const Chores: NextPage = () => {
  return (
    <>
      <Head>
        <title>All Chores</title>
        <meta name="description" content="View and Edit Chores" />
        <link rel="icon" href="/CircleLogoIco.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Chores
        </h1>
        <div className="p-4" />
        <AddChoreForm />
        <div className="p-4" />
        <AllChoresTable />
      </main>
    </>
  );
};

export default Chores;
