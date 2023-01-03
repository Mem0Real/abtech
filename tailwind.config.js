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
