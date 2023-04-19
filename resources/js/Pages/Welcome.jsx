import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Typed from "react-typed";
import Blink from "react-blink-text";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

export default function Welcome({ auth }) {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <Head title="Welcome" />

            <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900">
                <nav className="bg-white/25 border-b border-black">
                    <div className="flex justify-between items-center h-16 max-w-screen-2xl mx-auto px-4">
                        <h1 className="mx-4 mt-1 w-full font-extrabold font-untouched text-lg lg:text-3xl  bg-gradient-to-r from-[#2470c6] via-[#1feffe] to-white bg-clip-text text-transparent">
                            Triestis<span className="text-[#1feffe]">.</span>
                        </h1>
                        <ul className="hidden text-gray-400 font-semibold md:flex">
                            <li className="p-4">
                                <Link to="/Home">Home</Link>
                            </li>
                            <li className="p-4">
                                <Link to="/About">About </Link>
                            </li>
                            <li className="p-4">
                                <Link to="/Contact">Contact</Link>
                            </li>
                            {auth.user ? (
                                <li className="p-4">
                                    {" "}
                                    <Link
                                        href={route("dashboard")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li className="p-4">
                                        <Link
                                            href={route("login")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Login
                                        </Link>
                                    </li>

                                    <li className="p-4">
                                        <Link
                                            href={route("register")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        <div onClick={handleNav} className=" block md:hidden">
                            {nav ? (
                                <AiOutlineClose size={20} color="white" />
                            ) : (
                                <AiOutlineMenu size={20} color="white" />
                            )}
                        </div>
                        <ul
                            className={
                                nav
                                    ? "fixed min-h-full left-0 top-0 w-[60%] text-white border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                                    : "ease-in-out duration-600 fixed left-[-100%]"
                            }
                        >
                            <h1 className="mx-4 mt-4 w-full font-extrabold font-untouched text-lg lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                                Triestis
                                <span className="text-[#1feffe]">.</span>
                            </h1>
                            <li className="p-4 border-b border-gray-200 hover:border-gray-800 ease-out transition-all">
                                {" "}
                                <Link to="/Home">Home</Link>
                            </li>
                            <li className="p-4 ">
                                <Link to="/About"> About </Link>
                            </li>
                            <li className="p-4 ">
                                <Link to="/Contact"> Contact</Link>
                            </li>
                            {auth.user ? (
                                <li className="p-4">
                                    {" "}
                                    <Link
                                        href={route("dashboard")}
                                        className="font-semibold dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li className="p-4">
                                        <Link
                                            href={route("login")}
                                            className="font-semibold dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Login
                                        </Link>
                                    </li>

                                    <li className="p-4">
                                        <Link
                                            href={route("register")}
                                            className="font-semibold dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
                {/* HERO */}
                <div className="max-w-[500rem] mt-[-96px] w-full text-gray-300 h-screen mx-auto text-center flex flex-col justify-center">
                    <p className="text-[#1feffe] lg:flex justify-center hidden font-bold p-2">
                        UPGRADE YOUR GAMING EXPERIENCE WITH US!
                    </p>
                    <h1 className="lg:text-7xl text-8xl font-bold md:py-6">
                        <span className=" font-untouched bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                            Triestis.
                        </span>{" "}
                        <span className="lg:inline-flex hidden">
                            {" "}
                            GAMING CAFE
                        </span>
                    </h1>
                    <div className="flex justify-center items-center">
                        <p className="lg:text-5xl sm:text-4xl text-xl font-bold py-4">
                            Offer you the
                        </p>

                        <Typed
                            className="lg:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                            strings={[
                                "Best Gaming Experience!",
                                "Comfort of your Home!",
                                "Best Internet!",
                            ]}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                    </div>
                    <button className="bg-[#2470c6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
                        Get Started
                    </button>
                    <div className="justify-center md:flex hidden font-bold items-center opacity-25">
                        <p className="text-xl md:text-6xl font-bold py-4 pr-2">
                            OPEN
                        </p>
                        <Blink
                            color="#1feffe"
                            text="24hrs!"
                            fontSize="60px"
                        ></Blink>
                    </div>
                </div>
                <div className="w-full min-h-max h-[49rem] text-gray-300 py-16 px-4">
                    <div className="max-w-[1240px] my-[15rem] mx-auto grid md:grid-cols-2">
                        <div className="flex flex-col justify-center bg-black/50 p-4 rounded-md">
                            <p className="text-[#1feffe] font-bold ">
                                CAFE MANAGEMENT DASHBOARD
                            </p>
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                                Manage Your Subscription Here
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum molestiae delectus
                                culpa hic assumenda, voluptate reprehenderit
                                dolore autem cum ullam sed odit perspiciatis.
                                Doloribus quos velit, eveniet ex deserunt fuga?
                            </p>
                            <button className="bg-[#2470c6] text-[#fff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                {/* FOOTER */}
                <div className="max-w-screen-2xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                    <div>
                        <h1 class="mx-4 mt-4 w-full font-extrabold font-untouched text-lg lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
                            Triestis<span class="text-[#1feffe]">.</span>
                        </h1>
                        <p className="py-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Id odit ullam iste repellat consequatur libero
                            reiciendis, blanditiis accusantium.
                        </p>
                        <div className="flex justify-between md:w-[75%] my-6">
                            <FaFacebookSquare size={30} />
                            <FaInstagram size={30} />
                            <FaTwitterSquare size={30} />
                            <FaGithubSquare size={30} />
                            <FaDribbbleSquare size={30} />
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex justify-between mt-6">
                        <div>
                            <h6 className="text-lg font-extrabold text-gray-400">
                                Solutions
                            </h6>
                            <ul>
                                <li className="py-2 text-md">Analytics</li>
                                <li className="py-2 text-md">Marketing</li>
                                <li className="py-2 text-md">Commerce</li>
                                <li className="py-2 text-md">Insights</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-lg font-extrabold text-gray-400">
                                Support
                            </h6>
                            <ul>
                                <li className="py-2 text-md">Pricing</li>
                                <li className="py-2 text-md">Documentation</li>
                                <li className="py-2 text-md">Guides</li>
                                <li className="py-2 text-md">API Status</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-lg font-extrabold text-gray-400">
                                Company
                            </h6>
                            <ul>
                                <li className="py-2 text-md">About</li>
                                <li className="py-2 text-md">Blog</li>
                                <li className="py-2 text-md">Jobs</li>
                                <li className="py-2 text-md">Press</li>
                                <li className="py-2 text-md">Careers</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-lg font-extrabold text-gray-400">
                                Legal
                            </h6>
                            <ul>
                                <li className="py-2 text-md">Claim</li>
                                <li className="py-2 text-md">Policy</li>
                                <li className="py-2 text-md">Terms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
