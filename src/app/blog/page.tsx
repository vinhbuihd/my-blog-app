import Link from "next/link";
import React from "react";
import { prisma } from "../../../lib/prisma";

const Blog = async () => {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        <Link
          href={`/blog/create`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create post
        </Link>
      </div>
      <ul className="space-y-4">
        {posts
          .slice(0, 10)
          .map((post: { id: number; title: string; body: string }) => (
            <li key={post.id} className="p-4 border rounded-xl shadow-sm">
              <Link href={`/blog/${post.id}`}>
                <h2 className="font-semibold">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.body}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Blog;
