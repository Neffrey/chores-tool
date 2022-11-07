// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";

// COMPONENTS
import CompletedChoreForm from "components/organisms/completedChoreForm";
import AllChoresTable from "components/molecules/allChoresTable";
import IFAuth from "components/helpers/ifAuth";
import ChoresAuthed from "components/templates/choresAuthed";
import PageUnauthed from "components/templates/pageUnauthed";

// FC
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chores</title>
        <meta
          name="description"
          content="The uLtImAtE chore tracker for the rainbow sunshine house"
        />
        <link rel="icon" href="/CircleLogoIco.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Chores
        </h1>
        {IFAuth(<ChoresAuthed />, <PageUnauthed />)}
      </main>
    </>
  );
};

export default Home;
