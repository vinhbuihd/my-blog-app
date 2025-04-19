import { prisma } from "../../../../../lib/prisma";
import { updatePost } from "../../action";

type Props = {
  params: { id: string };
};

export default async function EditPost({ params }: Props) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });

  if (!post) return <div className="p-8">Post not found</div>;

  return (
    <form action={updatePost} className="p-8 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Edit Post</h1>

      <input type="hidden" name="id" value={String(post.id)} />

      <div>
        <label className="block font-medium">Title</label>
        <input
          name="title"
          defaultValue={post.title}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Body</label>
        <textarea
          name="body"
          defaultValue={post.body}
          rows={5}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
}
