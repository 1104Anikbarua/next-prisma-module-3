import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainCreate = async () => {
  const createUser = await prisma.user.create({
    data: {
      name: "rohit",
      email: "rohit@gmail.com",
      age: 35,
      country: "India",
      profileViews: 37,
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

// mainUpdate();

const mainTestUser = async () => {
  const createUser = await prisma.test.create({
    data: {
      name: "rohit",
      age: 32,
    },
  });
  console.log(createUser);
};
mainTestUser();
