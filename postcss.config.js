/**
 * POSTCSS.CONFIG.JS
 * PostCSS configuration for Autoprefixer
 */

module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                'last 2 versions',
                'Chrome >= 60',
                'Firefox >= 60',
                'Safari >= 12',
                'Edge >= 79'
            ]
        }
    }
};

