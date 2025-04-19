import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  console.info({ session });

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span>
          👋
          {session.user?.name}
        </span>
        <button onClick={() => signOut()} className="text-red-500 underline">
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("github")}
      className="text-blue-600 underline"
    >
      Login with GitHub
    </button>
  );
}
