import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainFindPost = async () => {
  const findPublishPost = await prisma.user.findMany({
    where: {
      posts: {
        every: {
          published: true,
        },
      },
    },
    include: { posts: true },
  });
  console.dir(findPublishPost, { depth: Infinity });
};
mainFindPost();
