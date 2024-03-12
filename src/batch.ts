import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      name: "mohit",
      email: "mohit@gmail.com",
      age: 26,
      country: "India",
      profileViews: 25,
    },
  });

  const createProfile = prisma.profile.create({
    data: {
      bio: "I am Mohi",
      userId: 12,
    },
  });

  const [createUserStatus, createProfileStatus] = await prisma.$transaction([
    createUser,
    createProfile,
  ]);

  console.log(createProfileStatus, createUserStatus);
};

batchTransaction();
