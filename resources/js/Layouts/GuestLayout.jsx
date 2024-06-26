import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { AiOutlineMail } from "react-icons/ai";

import { Link } from "@inertiajs/react";

export default function GuestLayout({ user, children, header }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
 const emailclick = () => {
     window.location.href = `mailto:${email}`;
 };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-gray-100 border-b border-gray-100">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center shrink-0">
                            <Link href="/dashboard">
                                <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
                            </Link>
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href={route("gallary")}
                                active={route().current("gallary")}
                            >
                                Gallary
                            </NavLink>
                            <NavLink
                            // href={route("dashboard")}
                            // active={route().current("dashboard")}
                            >
                                About Me
                            </NavLink>
                            {user && ( // Render only if authenticated
                                <NavLink
                                    href={route("project.index")}
                                    active={route().current("project.index")}
                                >
                                    Dashboard
                                </NavLink>
                            )}
                        </div>

                        {user && ( // Render only if authenticated
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                                >
                                                    {/* {user.name} */}
                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        )}

                        {!user && (
                            <div className="flex items-center justify-center">
                                <AiOutlineMail className="mr-2" />
                                <p>
                                    <span
                                        onClick={emailclick}
                                        className="text-blue-500 cursor-pointer hover:text-blue-700"
                                    >
                                        ibrahim@gmail.com
                                    </span>
                                </p>
                            </div>
                        )}
                        <div className="flex items-center -me-2 sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 da"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1 bg-white">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("gallary")}
                            active={route().current("gallary")}
                        >
                            Gallary
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                        // href={route("dashboard")}
                        // active={route().current("dashboard")}
                        >
                            About Me
                        </ResponsiveNavLink>
                    </div>

                    {user && ( // Render only if authenticated
                        <div className="bg-gray-100 border-t border-gray-200 1 bg-pt-4">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {header && (
                <header className="">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
