import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainPost = async () => {
  const creatPost = await prisma.post.create({
    data: {
      title: "this is regarding post title",
      content: "this is regarding post content",
      published: true,
      userId: 1,
      //   PostOnCategories: {
      //     create: {
      //       category: {
      //         connect: { id: 1 },
      //       },
      //     },
      //   },
    },
  });
  console.log(creatPost);
};

// mainPost();

const mainMultiplePost = async () => {
  const multiplePost = await prisma.post.create({
    data: {
      title: "This title is based on multple post",
      content: "There is multiple content",
      userId: 2,
      PostOnCategories: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
      },
    },
  });
  console.log(multiplePost);
};

mainMultiplePost();
