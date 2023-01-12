import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <>
        {/* Hero */}
        <div className="h-screen flex flex-col items-center justify-center bg-heroBg bg-center bg-fixed bg-no-repeat bg-cover">
          <div className="container text-center z-0 ">
            <h2 className="text-4xl md:mt-12 py-5 px-24 backdrop-blur-sm backdrop-saturate-200 rounded-3xl w-fit text-center mx-auto">
              Welcome To Abu Solar Tech
            </h2>
          </div>
        </div>

        {/* Motto */}
        <div className="h-80 flex flex-col items-center justify-center bg-white border-2 border-x-0 border-black text-black dark-mode:bg-black dark-mode:text-white">
          <div className="container text-center">
            <h2 className="text-3xl">
              We develop and distribute high-quality Solar Equipments across the
              country.
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div className="h-screen flex items-center justify-center md:justify-end bg-projectBg bg-center bg-cover pb-36">
          <div className="container flex flex-col md:w-1/2 mt-96 md:mt-80 text-center justify-center items-center lg:mr-3">
            <h1 className="text-2xl md:backdrop-blur-sm backdrop-blur-md bg-black/50 rounded-lg lg:py-12">
              We strive to eradicate our country's power and water problems by
              providing a non ending electric supply. Browse our previous
              projects and see for yourself.
            </h1>
            <br />
            <div className="bg-blue-400 hover:bg-blue-500 w-fit rounded-xl py-3">
              <Link
                className="px-4 py-2 mt-2 font-semibold text-lg bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                href="/solutions/projects"
                prefetch={false}
              >
                Our Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="h-64 flex flex-col items-center justify-center bg-white border-2 border-x-0 border-black text-black dark-mode:bg-black dark-mode:text-white">
          <div className="container text-center">
            <h2 className="text-2xl">
              We pride ourselves with an exceptional customer service!
            </h2>
          </div>
        </div>

        {/* Products */}
        <div className="h-screen flex items-center justify-center md:justify-start bg-productBg bg-center bg-cover bg-white bg-no-repeat pb-36">
          <div className="container flex flex-col md:w-1/2 mt-80 text-center justify-center items-center">
            <h1 className="text-2xl md:backdrop-grayscale backdrop-blur-md bg-black/50 rounded-lg lg:py-12 lg:ml-3 ">
              We provide a multitude of products ranging from simple, handheld
              and rechargable equipments all the way to massive infrastructures
              of solar panels and power systems. Take a look to your heart's
              content.
            </h1>
            <br />
            <div className="bg-blue-400 hover:bg-blue-500 focus:bg-gray-600 w-fit rounded-xl py-3">
              <Link
                className="px-4 py-2 mt-2 font-semibold text-lg bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                href="/solutions/products"
                prefetch={false}
              >
                Our Products
              </Link>
            </div>
          </div>
        </div>

        <div className="h-64 flex flex-col items-center justify-center bg-white border-2 border-x-0 border-black text-black dark-mode:bg-black dark-mode:text-white">
          <div className="container text-center">
            <h2 className="text-2xl">
              Dedicating our lives to help those in need brings us great joy!
            </h2>
          </div>
        </div>

        {/* Services */}
        <div className="h-screen flex items-center justify-center md:justify-end bg-serviceBg bg-center bg-cover pb-36">
          <div className="container flex flex-col md:w-1/2 mt-80 text-center justify-center items-center">
            <h1 className="text-xl md:text-2xl md:backdrop-grayscale backdrop-blur-md bg-black/50 rounded-lg lg:py-12 lg:mr-3 ">
              We offer a wide range of services including assembly and
              distribution. We pride ourselves in providing the best customer
              service so that you don't have to interact with all the nitty
              gritty details of these amazing products.
            </h1>
            <br />
            <div className="bg-blue-400 hover:bg-blue-500 w-fit rounded-xl py-3">
              <Link
                className="px-5 py-2 mt-2 font-semibold text-lg bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline"
                href="/solutions/services"
                prefetch={false}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
