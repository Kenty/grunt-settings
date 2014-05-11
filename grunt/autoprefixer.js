module.exports = {
    options: {
        browsers: ['last 2 version', 'ie 9']
    },
    dist: {
        src: 'assets/css/dest/style.css'
    },
    sourcemap: {
        options: {
            map: true
        },
        src: 'style.css',
        dest: 'assets/css/dest/style.css'
    }
};

