import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainAge = async () => {
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  console.log(countAge);
};

// mainAge();

const mainTuple = async () => {
  const count = await prisma.user.count();
  console.log(count);
};

mainTuple();
