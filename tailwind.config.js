// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                cookie: ["Cookie", "cursive"],
                merriweather: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [],
};
