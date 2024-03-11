import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainProfile = async () => {
  const createProfile = await prisma.profile.create({
    data: {
      userId: 9,
      bio: "Born for travel",
    },
  });
  console.log(createProfile);

  // const updateProfile = await prisma.user.update({
  //   where: {
  //     id: 6,
  //   },
  //   data: {
  //     // bio: "I am moushumi",
  //     profileViews: 25,
  //   },
  // });
};
mainProfile();
