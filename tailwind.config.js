module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    stroke: {
      lightblue: "#00e1ff",
    },
    extend: {
      borderColor: {
        lightblue: "#00e1ff",
        grey: "#ccd6f6",
        darkgrey: "#1c2736",
      },
      boxShadow: {
        white: "0 1px 3px 1px rgba(255, 255, 255)",
        grey: "0px 2px 5px 1px rgba(204, 214, 246)",
      },
      backgroundColor: (theme) => ({
        lightblue: "#00e1ff",
        grey: "#ccd6f6",
        darkgrey: "#1c2736",
      }),

      textColor: {
        lightblue: "#00e1ff",
        grey: "#ccd6f6",
        darkgrey: "#1b293d",
      },
      keyframes: {
        "right-to-left": {
          "0%": {
            transform: "translateX(200px)",
          },
        },
        "left-to-right": {
          "100%": {
            transform: "translateX(-200px)",
          },
        },
      },
      animation: {
        "right-to-left": "right-to-left 0.2s ease",
        "left-to-right": "left-to-right 0.3s ease",
      },
    },
  },
  variants: {
    extend: {
      position: [`hover`],
      stroke: ["hover", "focus"],
    },
  },
  plugins: [],
};
