import React from "react";
import { prisma } from "../../../../lib/prisma";
import Link from "next/link";
import { deletePost } from "../action";
import { Metadata } from "next";
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });

  return {
    title: post?.title,
    description: post?.body?.slice(0, 150),
    openGraph: {
      title: post?.title,
      description: post?.body?.slice(0, 150),
    },
  };
}

const BlogDetail = async ({ params }: Props) => {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!post) {
    return <div className="p-8">Post not found</div>;
  }

  return (
    <div>
      <h3 className="text-3xl">{post.title}</h3>
      <p>{post.body}</p>
      <p className="text-gray-400 text-sm">
        Created at: {new Date(post.createdAt).toLocaleString()}
      </p>

      <div className="flex items-center gap-4 mt-6">
        <Link
          href={`/blog/${post.id}/edit`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit
        </Link>

        <form action={deletePost}>
          <input type="hidden" name="id" value={String(post.id)} />
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetail;
