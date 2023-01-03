import React from "react";
import Image from "next/image";

import Layout from "../../components/layout";

import consult from "../../public/images/services/consult.jpg";
import transport from "../../public/images/services/transport.jpg";
import installation from "../../public/images/services/installation.jpg";
import training from "../../public/images/services/training.jpg";
import maintainance from "../../public/images/services/maintainance.jpg";
import warranty from "../../public/images/services/warranty.png";

const services = () => {
  return (
    <Layout>
      <div className="bg-heroServiceBg bg-fixed bg-center bg-no-repeat bg-cover text-white dark:bg-gray-800 dark:text-white">
        {/* Hero */}
        <div className="h-24 flex justify-center items-center">
          <h1 className="mt-64 text-4xl text-center underline underline-offset-8 ">
            Services We Provide
          </h1>
        </div>
        <section className="body-font mt-56">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    className="lg:h-72 md:h-60 w-full object-fill object-center"
                    src={consult}
                    alt="Consulting"
                  />
                  <div className="p-6 text-center bg-black h-full">
                    <h1 className="title-font text-lg font-medium underline underline-offset-4 mb-3">
                      Consultancy
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Project Consultancy regarding materials needed for your
                      dream setup.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    className="lg:h-72 md:h-60 w-full object-contain bg-white object-center"
                    src={transport}
                    alt="Transport"
                  />
                  <div className="p-6 text-center bg-black h-full">
                    <h1 className="title-font text-lg font-medium underline underline-offset-4 mb-3">
                      Transport & Delivery
                    </h1>
                    <p className="leading-relaxed mb-3">
                      We deliver our supplies in any location you are in. We
                      have multiple transportation systems spread across the
                      country and we will deliver within 72hrs of purchase.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    className="lg:h-72 md:h-60 w-full object-contain bg-white object-center"
                    src={installation}
                    alt="Installation"
                  />
                  <div className="p-6 text-center bg-black h-full">
                    <h1 className="title-font text-lg font-medium underline underline-offset-4 mb-3">
                      Installation
                    </h1>
                    <p className="leading-relaxed mb-3">
                      On-site Installation of a newly purchased product is
                      provided through our highly trained professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -m-4 md:mt-56">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    className="lg:h-72 md:h-60 w-full object-cover object-center"
                    src={training}
                    alt="Training"
                  />
                  <div className="p-6 text-center bg-black h-full">
                    <h1 className="title-font text-lg font-medium mb-3">
                      Technical Training
                    </h1>
                    <p className="leading-relaxed mb-3">
                      We provide technical training for customers and help
                      familiarize with the equipments purchased.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    className="lg:h-72 md:h-60 w-full object-cover object-bottom"
                    src={maintainance}
                    alt="Maintainance"
                  />
                  <div className="p-6 text-center bg-black h-full">
                    <h1 className="title-font text-lg font-medium mb-3">
                      Maintainance
                    </h1>
                    <p className="leading-relaxed mb-3">
                      We offer maintainance for any faulty equipment. Whenever
                      there is a problem, our engineers will be present on-site
                      within 72hrs to fix or replace any problematic products.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    className="lg:h-72 md:h-60 w-full object-cover object-center"
                    src={warranty}
                    alt="Warranty"
                  />
                  <div className="p-6 text-center bg-black h-full">
                    <h1 className="title-font text-lg font-medium mb-3">
                      Warranty
                    </h1>
                    <p className="leading-relaxed mb-3">
                      All our products have a 1 year warranty in which if at any
                      point in time there occurs a problem with our products, we
                      will be happy to fix or replace that item free of charge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default services;
