import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainSum = async () => {
  const sumOfAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  console.log(sumOfAge);
};
mainSum();
