module.exports = {
    content: ["./src/**/*.{html,astro,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                wiggle: "wiggle 1.5s ease-in-out infinite",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-10deg)" },
                    "50%": { transform: "rotate(10deg)" },
                },
            },
        },
    },
    plugins: [],
};