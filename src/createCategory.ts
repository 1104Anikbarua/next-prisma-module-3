import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainCategory = async () => {
  const createCategory = await prisma.category.create({
    data: {
      name: "App Development",
    },
  });
  console.log(createCategory);
};
mainCategory();
