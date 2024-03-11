import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainMin = async () => {
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(minAge);
};

mainMin();
