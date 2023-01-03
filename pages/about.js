import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-aboutBg bg-black bg-center bg-cover bg-no-repeat text-black bg-fixed">
      <div className="h-72 bg-transparent"></div>
        <div className="box-content flex flex-col items-center justify-center h-3/4 w-3/4 mx-auto backdrop-contrast-150 backdrop-blur-sm">
          <h3 className="text-2xl underline">Mission</h3>
          <br />
          <h2 className="text-xl text-center">
            To provide highest quality solar products across Ethiopia. <br />
            To Ensure every house has a renewable electric source to be used in
            all areas of life. <br />
            To brighten and propel our country to the future.
          </h2>
        </div>
        <div className="box-content flex flex-col items-center justify-center h-3/4 my-24 w-3/4 mx-auto backdrop-contrast-150 backdrop-blur-sm">
          <h3 className="text-2xl underline">Vision</h3>
          <br />
          <h2 className="text-xl text-center">
            To give power across all of Ethiopia and enable our country-men and
            women electricity within the next 10 years.
          </h2>
        </div>
        <div className="box-content flex flex-col items-center justify-center h-3/4 mt-24 pb-24 w-3/4 mx-auto backdrop-contrast-150 backdrop-blur-sm">
          <h3 className="text-2xl underline">About us</h3>
          <br />
          <h2 className="text-xl text-center">
            As a solar power system technology specialist, MUST has been
            developing and distributing high-quality PV solar panels, solar
            water pump, inverters and innovative technology for Ethiopians
            energy management for over 10 years.
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default About;
