module.exports = {
    dist: {
        files: {
            'style.css': '_scss/style.scss'
        }
    },
    options: {
        bundleExec: true,
        sourcemap: true,
        compass: 'config.rb',
        // quiet: true
    }
};
