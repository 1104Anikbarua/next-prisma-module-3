import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainCreate = async () => {
  const createUser = await prisma.user.create({
    data: {
      name: "shumi",
      email: "shumi@hotmail.com",
    },
  });
  console.log(createUser);
};
mainCreate();
