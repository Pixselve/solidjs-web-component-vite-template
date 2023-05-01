/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    corePlugins: {
        preflight: false,
    },
    darkMode: 'class',

    theme: {
        extend: {},
    },
    plugins: [],
};
