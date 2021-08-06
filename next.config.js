const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const optimizedImages = require("next-optimized-images");
module.exports = withPlugins([
    [
        withImages,
        {
            /* config for next-optimized-images */
        },
    ],
    [
        optimizedImages,
        {
            /* config for next-optimized-images */
            optimizeImages: false
        },
    ],

    // your other plugins here
]);
