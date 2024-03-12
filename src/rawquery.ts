import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// must be pass model name in quotation
const mainRaw = async () => {
  //   const result = await prisma.$queryRaw`Select * from "User"`;
  //   console.log(result);
  const email = "tyrant@gmail.com";
  const result =
    // await prisma.$queryRaw`Select * from "User" Where email=${email}`;
    await prisma.$queryRaw`Select * from "User" ORDER BY age asc`;

  console.log(result);
};

mainRaw();

const showAll = async () => {
  const result = await prisma.test.findMany({});
  console.log(result);
};
// showAll();

const executeRaw = async () => {
  const age = 22;
  const userId = 7;
  const result =
    await prisma.$executeRaw`update "Test" set age=${age} Where id=${userId} ORDER BY age 'asc'`;
  console.log(result);
};

// executeRaw();
