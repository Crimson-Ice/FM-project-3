/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            Orange: "hsl(25, 97%, 53%)",
            White: "hsl(0, 0%, 100%)",
            "Light-Grey": "hsl(217, 12%, 63%)",
            "Medium-Grey": "hsl(216, 12%, 54%)",
            "Dark-Blue": "hsl(213, 19%, 18%)",
            "Very-Dark-Blue": "hsl(216, 12%, 8%)",
        },
        extend: {
            screens: {
                xs: "540px",
            },
            // that is animation class
            animation: {
                fadein: "fadein 1s ease-out",
            },

            // that is actual animation
            keyframes: {
                fadein: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
