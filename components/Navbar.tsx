import React from "react";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

function Navbar(): React.ReactElement {
  const { userId } = auth();

  return (
    <nav className="bg-purple-500 px-10 py-3 flex justify-between items-center border-2 border-black">
      <div>
        <Link href="/" className="text-2xl">
          Clerk Authentication
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        {userId ? (
          <>
            <UserButton />
            <Link href="/profile">Profile</Link>
          </>
        ) : (
          <>
            <Link href="/sign-up">
              <button className="hover:bg-gray-700 hover:text-white bg-white text-black px-4 py-2 rounded-[25rem] border-black border hover:border-white">
                Sign Up
              </button>
            </Link>
            <Link href="/sign-in">
              <button className="bg-gray-700 text-white border border-white px-4 py-2 rounded-[25rem]">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
