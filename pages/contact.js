import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Layout from "../components/layout";

const style = {
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const contact = () => {
  let [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Layout>
      <section className="text-gray-400 bg-gray-900 body-font ">
        <div className="bg-black flex flex-col justify-center items-center sticky mx-auto">
          <button
            className="border px-4 py-3 hover:bg-stone-900 rounded-lg text-white text-md z-50"
            onClick={handleOpen}
          >
            Contact Us
          </button>
        </div>
        <div className="">
          <p className="-z-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.261074135882!2d38.73121343955079!3d9.034978400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8501bffc1c85%3A0x1fd4aeccb0e88b99!2zSGFidGVnaW9yZ2lzIEJyaWRnZSB8IFBpYXp6YSB8IOGIg-GJpeGJsOGMiuGLruGIreGMiuGItSDhi7XhiI3hi7Xhi60gfCDhjZLhi6vhiLM!5e0!3m2!1sen!2set!4v1671954721641!5m2!1sen!2set"
              // width="100%"
              // height="95%"
              // className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-screen h-screen -z-50"
            ></iframe>
          </p>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            className="rounded-3xl justify-center items-center absolute top-32 right-0 h-fit w-96 text-black text-center"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="underline"
            >
              Contact Info
            </Typography>
            <div
              id="modal-modal-description"
              className="box-border text-center"
            >
              <div className="lg:mt-12 text-center">
                {/* Social Buttons */}
                <p className="basis-1/4 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a
                    className="cursor-pointer text-gray-500"
                    href="https://facebook.com"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    className="ml-3 cursor-pointer text-gray-500"
                    href="https://twitter.com"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a
                    className="ml-3 cursor-pointer text-gray-500"
                    href="https://instagram.com"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </p>
                <hr />
                {/* Phone */}
                <div className="flex mt-12 flex-col justify-center items-center">
                  <p className="flex py-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <p>+251925312421</p>
                  </p>
                  <p className=" flex py-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <p>+251910371581</p>
                  </p>
                </div>
                <hr />
                {/* Email */}
                {/* <div className="flex mt-16 justify-center items-center mx-auto"> */}
                <p className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start pt-12">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="IconChangeColor"
                    className="-mt-1"
                  >
                    <path
                      d="M44 24V9H24H4V24V39H24"
                      stroke="#000000"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      id="mainIconPathAttribute"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M31 36L36 40L44 30"
                      stroke="#000000"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      id="mainIconPathAttribute"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M4 9L24 24L44 9"
                      stroke="#000000"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      id="mainIconPathAttribute"
                      fill="#ffffff"
                    ></path>
                  </svg>
                  <p className="pl-3">abuSolarTech@gmail.com</p>
                </p>
                {/* </div> */}
              </div>
            </div>
          </Box>
        </Modal>
      </section>
    </Layout>
  );
};

export default contact;
