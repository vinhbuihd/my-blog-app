"use server";

import { redirect } from "next/navigation";
import { prisma } from "../../../../lib/prisma";

export async function handleSubmit(formData: FormData) {
  const title = formData.get("title");
  const body = formData.get("body");

  console.log("Server Action received:", { title, body });
  if (!title || !body) {
    throw new Error("Missing title or body");
  }

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  redirect("/blog");
}
