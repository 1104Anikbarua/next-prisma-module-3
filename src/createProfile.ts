import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainProfile = async () => {
  const createProfile = await prisma.profile.create({
    data: {
      userId: 1,
      bio: "I am koushik.I am human.",
    },
  });
  console.log(createProfile);
};
mainProfile();
