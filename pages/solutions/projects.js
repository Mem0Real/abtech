import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Image from "next/image";

import Nuka from "../../carousel/Nuka";

import project1 from "../../public/images/project1.jpg";
import project2 from "../../public/images/project2.jpg";
import project3 from "../../public/images/project3.jpg";

const projects = () => {
  const [width, height] = useDeviceSize();

  return (
    <Layout>
      <div className="bg-white text-black dark:bg-gray-800 dark:text-white md:mb-0">
        {/* Hero */}
        <div className="h-24 flex justify-center items-center">
          <h1 className="mt-64 text-4xl text-center underline underline-offset-8">
            Some of Our Projects
          </h1>
        </div>

        {/* Project 1 */}
        <div className="h-fit mt-56 border border-x-0 border-b-black" id="pj1">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {width <= 768 ? (
                <>
                  {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
                  <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                    <Image
                      width={500}
                      height={500}
                      src={project1}
                      className="object-cover object-center"
                      alt="Hosanna"
                    />
                  </div>
                  {/* </div> */}
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Hosanna Hospital
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We provided this Hospital with a 15 kw solar power system
                      fitted with solar panels, batteries and converters. We
                      have it on good authority that this hospital will never
                      again suffer from power outage or waste of resources. Work
                      Smart, Live better.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Hosanna Hospital
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We provided this Hospital with a 15 kw solar power system
                      fitted with solar panels, batteries and coverters. We have
                      it on good authority that this hospital will never again
                      suffer from power outage or waste of resources. Work
                      Smart, Live better.
                    </p>
                  </div>
                  <br />

                  {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
                  <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                    <Image
                      width={500}
                      height={500}
                      src={project1}
                      className="object-cover object-center"
                      alt="Hosanna Hospital"
                    />
                  </div>
                  {/* </div> */}
                </>
              )}
            </div>
          </section>
        </div>

        {/* Project 2 */}
        <div className="h-fit " id="pj2">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
              <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                <Image
                  width={500}
                  height={500}
                  src={project2}
                  className="object-cover object-center"
                  alt="Shegole"
                />
              </div>
              {/* </div> */}
              <br />
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                  A.A Shegole Infrastructure
                </h1>
                <p className="mb-8 leading-relaxed text-center">
                  We installed solar charge controllers and batteries inorder to
                  utilize the power gained from the panels installed topside.
                  This system provides a full power to all the rooms and
                  equipments.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Project 3 */}
        <div className="h-fit mt-56 border border-x-0 border-b-black" id="pj1">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {width <= 768 ? (
                <>
                  {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
                  <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                    <Image
                      width={500}
                      height={500}
                      src={project3}
                      className="object-cover object-center"
                      alt="Goro"
                    />
                  </div>
                  {/* </div> */}
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Around Goro Hospital
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We have installed a solar system for a home around goro
                      hospital. As it's clearly seen below, this system is
                      simple and lightweight while at the same time offers full
                      coverage of a house's electrical needs.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Around Goro Hospital
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We have installed a solar system for a home around goro
                      hospital. As it's clearly seen below, this system is
                      simple and lightweight while at the same time offers full
                      coverage of a house's electrical needs.
                    </p>
                  </div>
                  <br />

                  {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
                  <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                    <Image
                      width={500}
                      height={500}
                      src={project3}
                      className="object-cover object-center"
                      alt="Goro Hospital"
                    />
                  </div>
                  {/* </div> */}
                </>
              )}
            </div>
          </section>
        </div>

        {/* Project 4 */}
        <div className="h-fit " id="pj2">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                  <Nuka name="projects" />
                </div>
              </div>
              <br />
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                  Other Jobs Aroud Addis Ababa
                </h1>
                <p className="mb-8 leading-relaxed text-center">
                  Here are some of our other solar products we have provided
                  around Addis Ababa. These products vary in all shapes and
                  forms and are specific to the layout of the places we had to
                  install them and the power requirements the customers' needed.
                  Take a look.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default projects;

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
