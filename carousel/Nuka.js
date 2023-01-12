import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import Image from "next/image";
import { easeCircleOut, easeElasticOut } from "d3-ease";

import battery1 from "../public/images/battery/battery1.jpg";
import battery2 from "../public/images/battery/battery2.jpg";
import battery3 from "../public/images/battery/battery3.jpg";
import battery4 from "../public/images/battery/battery4.jpg";
import battery5 from "../public/images/battery/battery5.jpg";
import battery6 from "../public/images/battery/battery6.jpg";

import lineIU1 from "../public/images/lineIU/lineIU1.jpg";
import lineIU2 from "../public/images/lineIU/lineIU2.jpg";
import lineIU3 from "../public/images/lineIU/lineIU3.jpg";
import lineIU4 from "../public/images/lineIU/lineIU4.jpg";
import lineIU5 from "../public/images/lineIU/lineIU5.jpg";
import lineIU6 from "../public/images/lineIU/lineIU6.jpg";

import onlineU1 from "../public/images/onlineU/ou1.jpg";
import onlineU2 from "../public/images/onlineU/ou2.jpg";
import onlineU3 from "../public/images/onlineU/ou3.jpg";
import onlineU4 from "../public/images/onlineU/ou4.jpg";
import onlineU5 from "../public/images/onlineU/ou5.jpg";
import onlineU6 from "../public/images/onlineU/ou6.jpg";

import powinv1 from "../public/images/powinv/pi1.jpg";
import powinv2 from "../public/images/powinv/pi2.jpg";
import powinv3 from "../public/images/powinv/pi3.jpg";
import powinv4 from "../public/images/powinv/pi4.jpg";
import powinv5 from "../public/images/powinv/pi5.jpg";
import powinv6 from "../public/images/powinv/pi6.jpg";

import socc1 from "../public/images/socc/scc1.jpg";
import socc2 from "../public/images/socc/scc2.jpg";
import socc3 from "../public/images/socc/scc3.jpg";
import socc4 from "../public/images/socc/scc4.jpg";
import socc5 from "../public/images/socc/scc5.jpg";
import socc6 from "../public/images/socc/scc6.jpg";

import solarinv1 from "../public/images/solarinv/si1.jpg";
import solarinv2 from "../public/images/solarinv/si2.jpg";
import solarinv3 from "../public/images/solarinv/si3.jpg";
import solarinv4 from "../public/images/solarinv/si4.jpg";
import solarinv5 from "../public/images/solarinv/si5.jpg";
import solarinv6 from "../public/images/solarinv/si6.jpg";

import soli1 from "../public/images/soli/sl1.jpg";
import soli2 from "../public/images/soli/sl2.jpg";
import soli3 from "../public/images/soli/sl3.jpg";
import soli4 from "../public/images/soli/sl4.jpg";
import soli5 from "../public/images/soli/sl5.jpg";
import soli6 from "../public/images/soli/sl6.jpg";

import sopan1 from "../public/images/sopan/sp1.jpg";
import sopan2 from "../public/images/sopan/sp2.jpg";
import sopan3 from "../public/images/sopan/sp3.jpg";
import sopan4 from "../public/images/sopan/sp4.jpg";
import sopan5 from "../public/images/sopan/sp5.jpg";
import sopan6 from "../public/images/sopan/sp6.jpg";

import sps1 from "../public/images/sps/sps1.jpg";
import sps2 from "../public/images/sps/sps2.jpg";
import sps3 from "../public/images/sps/sps3.jpg";
import sps4 from "../public/images/sps/sps4.jpg";
import sps5 from "../public/images/sps/sps5.jpg";
import sps6 from "../public/images/sps/sps6.jpg";

import projects1 from "../public/images/projects/projects1.jpg";
import projects2 from "../public/images/projects/projects2.jpg";
import projects3 from "../public/images/projects/projects3.jpg";
import projects4 from "../public/images/projects/projects4.jpg";
import projects5 from "../public/images/projects/projects5.jpg";
import projects6 from "../public/images/projects/projects6.jpg";

const Nuka = ({ name }) => {
  const __dirName = `/images/${name}/`;

  switch (name) {
    case "battery":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={battery1}
              alt={`${name} image`}
              className="object-cover h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={battery2}
              alt={`${name} image`}
              className="object-cover h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={battery3}
              alt={`${name} image`}
              className="object-cover h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={battery4}
              alt={`${name} image`}
              className="object-cover h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={battery5}
              alt={`${name} image`}
              className="object-cover h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={battery6}
              alt={`${name} image`}
              className="object-cover h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "lineIU":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={lineIU1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={lineIU2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={lineIU3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={lineIU4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={lineIU5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={lineIU6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "onlineU":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={onlineU1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={onlineU2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={onlineU3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={onlineU4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={onlineU5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={onlineU6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "powinv":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={powinv1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={powinv2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={powinv3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={powinv4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={powinv5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={powinv6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "socc":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={socc1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={socc2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={socc3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={socc4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={socc5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={socc6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "solarinv":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={solarinv1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={solarinv2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={solarinv3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={solarinv4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={solarinv5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={solarinv6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "soli":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={soli1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={soli2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={soli3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={soli4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={soli5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={soli6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "sopan":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={sopan1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sopan2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sopan3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sopan4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sopan5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sopan6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "sps":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={sps1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sps2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sps3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sps4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sps5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={sps6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
    case "projects":
      return (
        <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
          <Carousel
            easing={easeCircleOut}
            edgeEasing={easeElasticOut}
            dragging={true}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            cellAlign="center"
            speed={500}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              //   nextButtonClassName: "invisible",
              //   prevButtonClassName: "invisible",
            }}
          >
            <Image
              src={projects1}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={projects2}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={projects3}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={projects4}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={projects5}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
            <Image
              src={projects6}
              alt={`${name} image`}
              className="object-contain h-80 w-full"
              width={500}
              height={500}
            />
          </Carousel>
        </div>
      );
  }
  // return (
  //   <div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
  //     <Carousel
  //       wrapAround={true}
  //       slidesToShow={1}
  //       autoplay={true}
  //       cellAlign="center"
  //       speed={500}
  //       defaultControlsConfig={{
  //         nextButtonText: ">",
  //         prevButtonText: "<",
  //         //   nextButtonClassName: "invisible",
  //         //   prevButtonClassName: "invisible",
  //       }}
  //     >
  //       {name === "battery" &&
  //         battery.map((batData, index) => {
  //           return (
  //             <img
  //               key={index}
  //               src={__dirName + batData.name + ".jpg"}
  //               alt={`${name} 'image'`}
  //               className="object-contain h-80 w-full"
  //             />
  //           );
  //         })}
  //       {name === "lineIU" &&
  //         battery.map((batData, index) => {
  //           return (
  //             <img
  //               key={index}
  //               src={__dirName + batData.name + ".jpg"}
  //               alt={`${name} 'image'`}
  //               className="object-contain h-80 w-full"
  //             />
  //           );
  //         })}
  //     </Carousel>
  //   </div>
  // );
};

export default Nuka;
