"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function UserMenu({ session }: {
  session: Session
}) {
  const userNavigation = [
    { name: "Settings", href: "#" },
    { name: "Sign out", onClick: () => signOut() },
  ];

  return <Menu as="div" className="relative ml-4 flex-shrink-0">
    <div>
      <Menu.Button className="flex rounded-full bg-slate-800 text-sm">
        <span className="sr-only">Open user menu</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rounded-full !my-0"
          src={
            session?.user?.image ||
            `https://api.dicebear.com/5.x/thumbs/svg?flip=true&seed=${session?.user?.name ?? session?.user?.email ?? ""
            }`
          }
          alt=""
          height={32}
          width={32}
          onError={(e) => {
            e.currentTarget.src = `https://api.dicebear.com/5.x/thumbs/svg?flip=true&seed=${session?.user?.name ?? session?.user?.email ?? ""
              }`;
          }}
        />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded bg-slate-800 py-1 shadow-lg">
        {userNavigation.map((item) => (
          <Menu.Item
            as={item.href ? Link : "div"}
            key={item.name.toLowerCase()}
            {...(item.onClick
              ? { onClick: item.onClick }
              : { href: item.href })}
            className="block px-4 py-2 text-sm hover:bg-slate-700 cursor-pointer"
          >
            {({ active }) => <span>{item.name}</span>}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
}