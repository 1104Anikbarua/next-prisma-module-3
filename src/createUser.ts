import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainCreate = async () => {
  const createUser = await prisma.user.create({
    data: {
      name: "pappu",
      email: "pappu@.com",
      age: 22,
    },
  });
  console.log(createUser);
};
// mainCreate();
