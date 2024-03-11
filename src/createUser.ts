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

const mainUpdate = async () => {
  const updateUser = await prisma.user.update({
    where: { id: 6 },
    data: {
      email: "paps@gmail.com",
    },
  });
  console.log(updateUser);
};

mainUpdate();
