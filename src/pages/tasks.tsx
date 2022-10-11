import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "utils/trpc";

const Tasks: NextPage = () => {
  const addChore = trpc.useMutation("public.addChore");

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Chores app
        </h1>
        <div className="flex w-full items-center justify-around pt-6 text-2xl">
          <button
            className="btn btn-primary"
            onClick={() =>
              addChore.mutate({ name: "big chore", isDifficult: true })
            }
          >
            add chore
          </button>
          <button className="btn btn-primary">log chores</button>
        </div>
      </main>
    </>
  );
};

export default Tasks;
