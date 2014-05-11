module.exports = {
    my_target: {
        files: {
            'js/dest/my_script_test.min.js': ['js/my_script_test.js']
        },
        options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
            ' * Licensed GPLv2+' +
            ' */\n',
            mangle: {except: ['jQuery']},
            beautify: true
        }
    }
};
