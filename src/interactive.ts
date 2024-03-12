import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainInteractive = async () => {
  const result = await prisma.$transaction(async (prismaConstructor) => {
    const createPost = await prismaConstructor.post.create({
      data: {
        title: "This post is created with the help of interactive transaction",
        content:
          "This content is created with the help of interactive transaction",
        userId: 10,
        PostOnCategories: {
          create: [{ categoryId: 1 }, { categoryId: 2 }],
        },
      },
    });

    const updateUser = await prismaConstructor.user.update({
      where: {
        id: 10,
      },
      data: {
        role: "Admin",
      },
    });
    return { createPost, updateUser };
  });
  console.log(result);
};

mainInteractive();
