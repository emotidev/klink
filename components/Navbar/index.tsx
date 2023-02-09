import {
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Session } from "next-auth";
import UserMenu from "./UserMenu";
import SignInButton from "./SignInButton";

export default function Navbar({ session }: {
  session: Session | null;
}) {

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center px-2 lg:px-0">
            <Link href="/" className="flex-shrink-0">
              <h2>Klink</h2>
            </Link>
          </div>
          <div className="ml-4 block">
            <div className="flex items-center">
              {session ? (
                <>
                  <UserMenu session={session} />
                </>
              ) : (
                <SignInButton>
                  Login
                  <ArrowLeftOnRectangleIcon className="h-8 w-8" />
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}