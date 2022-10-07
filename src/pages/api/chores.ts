// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "server/db/client";

const chores = async (req: NextApiRequest, res: NextApiResponse) => {
  const chores = await prisma.chore.findMany();
  res.status(200).json(chores);
};

export default chores;
