import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// console.log(prisma);
const findAvg = async () => {
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  console.log(avgAge);
};

findAvg();
