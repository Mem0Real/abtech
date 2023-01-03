/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/images/resizedImg/hero3.webp')",
        heroServiceBg: "url('/images/resizedImg/hero4.webp')",
        aboutBg: "url('/images/resizedImg/about2.jpg')",
        projectBg: "url('/images/resizedImg/project.webp')",
        productBg: "url('/images/resizedImg/product.webp')",
        productDarkBg: "url('/images/productDark.jpg')",
        serviceBg: "url('/images/resizedImg/service.webp')",

        battery: "url('/images/dropDown/battery.jpg')",
        lineIU: "url('/images/dropDown/lineIU.jpg')",
        onlineU: "url('/images/dropDown/onlineU.jpg')",
        powinv: "url('/images/dropDown/powinv.jpg')",
        socc: "url('/images/dropDown/socc.jpg')",
        solarinv: "url('/images/dropDown/solarinv.jpg')",
        soli: "url('/images/dropDown/soli.jpg')",
        sopan: "url('/images/dropDown/sopan.jpg')",
        sps: "url('/images/dropDown/sps.jpg')",
      },
      fontFamily: {
        montserrat: ["MontserratLight"],
        sans: ["MontserratLight", "sans-serif"],
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  corePlugins: {
    fontFamily: true,
  },
};
