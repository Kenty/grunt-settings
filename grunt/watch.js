module.exports = {
    scripts: {
        files:['js/**/*.js'],
        tasks: ['jshint', 'uglify'],
        options: {
            debounceDelay: 500
        }
    },
    sass: {
        files: ['_scss/**/*.scss'],
        tasks: ['sass'],
        options: {
            livereload: true,
            spawn: false
        }
    },
    reload: {
        files: ['./*.php', './js/*.js'],
        options: {
            livereload: true
        }
    }
};
