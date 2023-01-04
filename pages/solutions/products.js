import React, { useState, useEffect } from "react";
import Nuka from "../../carousel/Nuka";
import Layout from "../../components/layout";

const products = () => {
  const [width, height] = useDeviceSize();

  return (
    <Layout>
      <div className="bg-white text-black dark:bg-gray-800 dark:text-white md:mb-0">
        {/* Hero */}
        <div className="h-24 flex justify-center items-center">
          <h1 className="mt-64 text-4xl text-center underline underline-offset-8">
            List of Our Products
          </h1>
        </div>

        {/* Batteries */}
        <span id="battery"></span>
        <div className="h-fit border border-x-0 border-b-black">
          <section className="mt-56 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {width <= 768 ? (
                <>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="battery" />
                    </div>
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Batteries
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We provide exceptional batteries that can hold upto 12hrs
                      of charge. They have solar adaptive chips that enable them
                      to be recharged using sunlight. An hour of charge that can
                      last a day?
                      <br />
                      That is our guarantee!
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Batteries
                    </h1>

                    <p className="mb-8 leading-relaxed text-center">
                      We provide exceptional batteries that can hold upto 12hrs
                      of charge. They have solar adaptive chips that enable them
                      to be recharged using sunlight. An hour of charge that can
                      last a day?
                      <br />
                      That is our guarantee!
                    </p>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="battery" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>

        {/* Line Interactive UPS */}
        <span id="lineIU"></span>
        <div className="h-fit ">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                  <Nuka name="lineIU" />
                </div>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                  Line Interactive UPS
                </h1>
                <p className="mb-8 leading-relaxed text-center">
                  Our one of a kind Line Interactive UPSs will provides power
                  conditioning with a 4-6 millisecond break in power when
                  transferring to battery back-up and protects against the most
                  common power problems are experienced. Gone are the days when
                  a data goes missing because the lights went out. Use our Line
                  Interactive UPS and you will find safe-heaven from any power
                  related interruptions.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Online UPS */}
        <span id="onlineU"></span>
        <div className="h-fit border border-x-0 border-y-black">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {width <= 768 ? (
                <>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="onlineU" />
                    </div>
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Online UPS
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We offer protection against unwarranted voltage spike or
                      power loss against which our product will keep the power
                      steady and unchanged. When power is restored, the
                      rectifier will resume carrying most of the load and begin
                      charging the batteries.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Online UPS
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We offer protection against unwarranted voltage spike or
                      power loss against which our product will keep the power
                      steady and unchanged. When power is restored, the
                      rectifier will resume carrying most of the load and begin
                      charging the batteries.
                    </p>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="onlineU" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>

        {/* Power Inverter */}
        <span id="powinv"></span>
        <div className="h-fit border border-x-0 border-y-black ">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                  <Nuka name="powinv" />
                </div>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                  Power Inverters
                </h1>
                <p className="mb-8 leading-relaxed text-center">
                  Our power inverter is an electronic device or circuitry that
                  converts DC to AC. This product offers protection whenever
                  there is a spike in current or voltage and will shield your
                  devices from damage by maintaining a constant flow. It is also
                  used to operate electrical equipment from the power produced
                  by solar energy.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Solar Charge Controller */}
        <span id="socc"></span>
        <div className="h-fit border border-x-0 border-y-black">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {width <= 768 ? (
                <>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="socc" />
                    </div>
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Solar Charge Controllers
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      Our exceptional charge controllers used to keep the
                      battery from overcharging by regulating the voltage and
                      current coming from the solar panel to the battery. This
                      will prevent degradation and wear of your batteries and
                      thus offering longer power source.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Solar Charge Controllers
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      Our exceptional charge controllers used to keep the
                      battery from overcharging by regulating the voltage and
                      current coming from the solar panel to the battery. This
                      will prevent degradation and wear of your batteries and
                      thus offering longer power source.
                    </p>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="socc" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>

        {/* Solar Inverter */}
        <span id="solarinv"></span>
        <div className="h-fit border border-x-0 border-y-black ">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                  <Nuka name="solarinv" />
                </div>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                  Solar Inverters
                </h1>
                <p className="mb-8 leading-relaxed text-center">
                  This is a device that converts direct current (DC)
                  electricity, which is what a solar panel generates, to
                  alternating current (AC) electricity, which the electrical
                  grid uses. It's main purpose is to use the harnessed solar
                  energy to be used directly in your home or office appliances.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Solar Lighting System */}
        <span id="soli"></span>
        <div className="h-fit border border-x-0 border-y-black">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {width <= 768 ? (
                <>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="soli" />
                    </div>
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Solar Lighting Systems
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      Push away the darkness by installing one of our solar
                      lighting systems indefinetly. We offer a multitude of
                      lighting systems both for indoors and outdoors that can
                      operate for over 12 hours. A simple setup will provide you
                      with unlimited source enough to power your entire home or
                      office.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Solar Lighting Systems
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      Push away the darkness by installing one of our solar
                      lighting systems indefinetly. We offer a multitude of
                      lighting systems both for indoors and outdoors that can
                      operate for over 12 hours. A simple setup will provide you
                      with unlimited source enough to power your entire home or
                      office.
                    </p>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="soli" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>

        {/* Solar Panel */}
        <span id="sopan"></span>
        <div className="h-fit border border-x-0 border-y-black ">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                  <Nuka name="sopan" />
                </div>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                  Solar Panels
                </h1>
                <p className="mb-8 leading-relaxed text-center">
                  Our solar panels convert sunlight into electrical energy
                  either through photovoltaic (PV) panels or through mirrors
                  that concentrate solar radiation. These are available in
                  varying sizes for all your solar needs. These devices are
                  highly receptive and will provide power even on cloudiest days
                  ensuring you will never run out of power.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Solar Power System */}
        <span id="sps"></span>
        <div className="h-fit border border-x-0 border-y-black">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {width <= 768 ? (
                <>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="sps" />
                    </div>
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Solar Power Systems
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We offer an all inclusive, complete setup from panels to
                      batteries and inverters that will provide all the
                      necessary energy into your home or office. We have
                      multiple options for you to choose from and we guarantee
                      your utmost satisfaction.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium mx-auto">
                      Solar Power Systems
                    </h1>
                    <p className="mb-8 leading-relaxed text-center">
                      We offer an all inclusive, complete setup from panels to
                      batteries and inverters that will provide all the
                      necessary energy into your home or office. We have
                      multiple options for you to choose from and we guarantee
                      your utmost satisfaction.
                    </p>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-fit overflow-hidden lg:h-auto h-fit object-contain object-center rounded-md">
                      <Nuka name="sps" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default products;

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
