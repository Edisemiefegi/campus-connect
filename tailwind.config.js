import colors from "tailwindcss/colors";

export default {
  theme: {
    extend: {
      colors: {
        primary: "#183a37",
        dark: "#04151F",
        secondary: "#E7A941",
        accent: "#C44900",
        light: "#0ABF54",
        error: "#EB5757",
        success: "#0FC236",
      },
      animation: {
        "move-right": "move-right 2s linear infinite",
        "move-left": "move-left 2s linear infinite",
        "move-up": "move-up 2s linear infinite",
        "move-down": "move-down 2s linear infinite",
      },
      keyframes: {
        "move-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
        },
        "move-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-100px)" },
        },
        "move-up": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-100px)" },
        },
        "move-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(100px)" },
        },
      },
    },
  },
};
