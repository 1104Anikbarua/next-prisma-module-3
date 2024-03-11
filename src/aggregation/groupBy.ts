import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainProfile = async () => {
  const groups = await prisma.user.groupBy({
    by: "country",
    where: {
      country: {
        notIn: ["Bangladesh"],
      },
      email: {
        contains: "@gmail",
      },
    },
    _sum: {
      profileViews: true,
    },
    having: {
      profileViews: {
        _avg: {
          gt: 30,
        },
      },
    },
  });

  const groups2 = await prisma.user.aggregate({
    _avg: {
      profileViews: true,
    },
  });

  console.log(groups, groups2);
};
mainProfile();
