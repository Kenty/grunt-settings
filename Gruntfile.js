module.exports = function(grunt) {
    'use strict';

    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    // load grunt config
    require('load-grunt-config')(grunt, {

        // Options for `grunt.initConfig`
        config: {
            pkg: require('./package.json')
        }
    });

    grunt.registerTask(
        'default', [
            'newer:jshint',
            'newer:uglify',
            'newer:sass',
            'newer:autoprefixer',
            'watch'
        ]
    );
    //grunt.registerTask('buildcss', ['sass']);
    grunt.registerTask('optim', ['imageoptim']);
    grunt.registerTask('jmin', ['jpgmin']);
    grunt.registerTask('syncs', ['browser_sync', 'watch']);
};
