"use server";

import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";

export async function updatePost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const id = Number(formData.get("id"));
  if (!title || !body) throw new Error("Missing title or body");

  await prisma.post.update({
    where: { id },
    data: { title, body, id },
  });

  redirect(`/blog/${id}`);
}

export async function deletePost(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) throw new Error("Missing post id");
  await prisma.post.delete({
    where: { id },
  });

  redirect(`/blog`);
}
