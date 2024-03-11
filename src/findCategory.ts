import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainFind = async () => {
  const findCategory = await prisma.user.findMany({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
  console.dir(findCategory, { depth: Infinity });
};

mainFind();
