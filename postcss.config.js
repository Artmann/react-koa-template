const { join } = require('path');
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss(join(__dirname, 'src', 'app', 'tailwind.js')),
        require('autoprefixer')
    ],
};
