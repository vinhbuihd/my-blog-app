// app/blog/[id]/edit/page.tsx

import { notFound } from "next/navigation";
import { prisma } from "../../../../../lib/prisma";
import { updatePost } from "../../action";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage(props: Props) {
  const params = await props.params;
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });

  if (!post) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form action={updatePost} className="space-y-4">
        <input type="hidden" name="id" value={post.id} />
        <input
          name="title"
          defaultValue={post.title}
          className="border p-2 w-full"
        />
        <textarea
          name="body"
          defaultValue={post.body}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
