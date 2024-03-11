import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainUpdate = async () => {
  //   const result = await prisma.user.update({
  //     where: {
  //       id: 3,
  //     },
  //     data: {
  //       age: 31,
  //       country: "Bhutan",
  //     },
  //   });
  const result = await prisma.profile.update({
    where: {
      id: 1,
    },
    data: {
      profileViews: 30,
    },
  });

  console.log(result);
};

mainUpdate();
