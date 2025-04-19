"use client";

import { useState } from "react";
import { handleSubmit } from "./action";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form action={handleSubmit} className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Create New Post</h1>
      <input
        type="text"
        name="title"
        placeholder="Post title"
        className="border px-4 py-2 w-full rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        name="body"
        placeholder="Post content"
        className="border px-4 py-2 w-full rounded h-32"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CreatePostPage;
