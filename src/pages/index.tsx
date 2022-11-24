// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";

// COMPONENTS
import CompletedChoreForm from "components/organisms/completedChoreForm";
import AllChoresTable from "components/molecules/allChoresTable";
import IFUser from "components/helpers/ifUser";
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

      <main className="min-w-screen flex min-h-screen w-full flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Chores
        </h1>
        {IFUser(<ChoresAuthed />, <PageUnauthed />)}
      </main>
    </>
  );
};

export default Home;
