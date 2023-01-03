import React, { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { scroller } from "react-scroll";
import "animate.css";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);

  const drop1Ref = useRef();
  const drop2Ref = useRef();

  const btn1Ref = useRef();
  const btn2Ref = useRef();

  const [width, height] = useDeviceSize();

  // Open & Close the First Dropdown
  const openDrop1 = () => {
    setDrop1(true);
  };

  const closeDrop1 = () => {
    setDrop1(false);
    setDrop2(false);
  };

  // Open & Close the Second Dropdown
  const openDrop2 = () => {
    setDrop2(true);
  };

  const closeDrop2 = () => {
    setDrop2(false);
  };

  // Navigate to Products page then scroll to appropriate location
  let off;
  if (width <= 414) {
    off = -1700;
  } else if (width > 414 && width <= 820) {
    off = -1000;
  } else if (width > 820 && width <= 912) {
    off = -1000;
  } else if (width > 910 && width <= 1024) {
    off = -700;
  } else if (width > 1024 && width <= 1280) {
    off = -600;
  } else {
    off = -470;
  }

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 1300, offset: off });
    closeDrop1();
  };

  const scrollToPage = (target) => {
    closeDrop1();
    if (window.location.pathname !== "/solutions/products") {
      router.push("/solutions/products").then(() => {
        window.location.pathname === "/solutions/products" &&
          setTimeout(() => {
            scrollTarget(target);
          }, 700);
      });
    } else scrollTarget(target);
  };

  const dropDownData = [
    {
      name: "Batteries",
      location: "battery",
      description: "Reliable & Durable.",
      src: "/images/dropDown/battery.jpg",
    },
    {
      name: "Line Interactive UPS",
      location: "lineIU",
      description: "Save your work incase of power outage.",
      src: "/images/dropDown/lineIU.jpg",
    },
    {
      name: "Online UPS",
      location: "onlineU",
      description: "Protect your device from voltage spike.",
      src: "/images/dropDown/onlineU.jpg",
    },
    {
      name: "Power Inverter",
      location: "powinv",
      description: "Easily Convert DC to AC.",
      src: "/images/dropDown/powinv.jpg",
    },

    {
      name: "Solar Charge Controller",
      location: "socc",
      description: "Maintain your preferred charge amount.",
      src: "/images/dropDown/socc.jpg",
    },
    {
      name: "Solar Inverter",
      location: "solarinv",
      description: "Easily Convert Solar Power to AC.",
      src: "/images/dropDown/solarinv.jpg",
    },
    {
      name: "Solar Lighting System",
      location: "soli",
      description: "Harness the Sun, setup a great lighting system.",
      src: "/images/dropDown/soli.jpg",
    },
    {
      name: "Solar Panel",
      location: "sopan",
      description: "Top of the line solar recieving plates.",
      src: "/images/dropDown/sopan.jpg",
    },
    {
      name: "Solar Power System",
      location: "sps",
      description: "Control power flow from solar energy.",
      src: "/images/dropDown/sps.jpg",
    },
  ];

  return (
    <ClickAwayListener onClickAway={() => closeDrop1()}>
      <div>
        <div className={`z-30 w-full`}>
          <div className="antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-300">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                  prefetch={false}
                >
                  Abu Solar Technology
                </Link>
                <button
                  className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    setOpen(!open);
                  }}
                  role="button"
                  aria-label="Menu"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              <nav
                className={`${
                  open ? "flex" : "hidden"
                } flex-col flex-grow my-4 md:pb-0 md:flex md:justify-end md:flex-row`}
              >
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/"
                  prefetch={false}
                >
                  Home
                </Link>
                <a
                  ref={btn1Ref}
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 hover:cursor-pointer focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    drop1 ? closeDrop1() : openDrop1();
                  }}
                >
                  <div className="flex">
                    <span>Solutions</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className={`${
                        drop1 ? "rotate-180" : "rotate-0"
                      } inline w-5 h-5 ml-1 transition-transform duration-200 transform`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </a>

                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/about"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/contact"
                  prefetch={false}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Dropdown 1 */}
        <div className={`relative w-full z-40 `}>
          <div
            ref={drop1Ref}
            className={`${!drop1 ? "hidden" : "flex justify-center"}`}
          >
            <div className="h-16 bg-white text-black items-center w-full flex justify-between px-3 md:px-24 ">
              <Link
                className="py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="/solutions/projects"
                prefetch={false}
              >
                Projects
              </Link>
              <div className="inline-flex rounded-md shadow-sm">
                <a
                  ref={btn2Ref}
                  onClick={() => (drop2 ? closeDrop2() : openDrop2())}
                  className="pl-3 md:pl-0 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 hover:cursor-pointer focus:outline-none focus:shadow-outline"
                >
                  <div className="flex">
                    <span>Products</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className={`${
                        drop2 ? "rotate-180" : "rotate-0"
                      } inline w-5 h-5 ml-1 transition-transform duration-200 transform`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <Link
                className="btn py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="/solutions/services"
                prefetch={false}
              >
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown 2 */}
        <div className={`relative w-screen z-40`}>
          <div
            ref={drop2Ref}
            className={`${!drop1 || !drop2 ? "hidden" : "block"}`}
          >
            <div className="h-fit bg-white text-black flex flex-wrap justify-center items-center pb-12">
              {dropDownData.map((dropDownItem, key) => {
                return (
                  <a
                    key={key}
                    className="h-60 mt-12 flex justify-center items-center bg-transparent hover:cursor-pointer hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline border-black/30 border border-t-0 border-l-0 border-r-1 w-52 p-2 shadow-2xl rounded-md"
                    onClick={() => scrollToPage(dropDownItem.location)}
                  >
                    <div className="flex flex-col">
                      <div
                        className="w-full h-36 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${dropDownItem.src})`,
                        }}
                      ></div>
                      <div className="text-center">
                        <p className="font-semibold">{dropDownItem.name}</p>
                        <p className="text-sm">{dropDownItem.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};
