import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";

export default function Layout({ children }) {
  // Navigate to the top on button click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [width, height] = useDeviceSize();

  return (
    <>
      <Head>
        <title>Abu Solar Technology</title>
        <meta name="description" content="Solar Systems Provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="HhKAQU5hfMo-VQl2en2VtJO2YpLD3vGuo7X-thnSDCE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar width={width} height={height} />
      </header>
      <main>{children}</main>
      <footer>
        <button
          className="fixed bottom-16 right-7 hover:outline hover:outline-blue-700 rounded-full outline-offset-2"
          onClick={() => {
            scrollToTop();
          }}
          role="button"
          aria-label="Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            fill="currentColor"
            className="bi bi-arrow-up-circle"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
              id="mainIconPathAttribute"
              fill="#03989e"
            ></path>{" "}
          </svg>
        </button>
        <Footer width={width} height={height} />
      </footer>
    </>
  );
}

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
