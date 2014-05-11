module.exports = {
    dev: {
        bsFiles: {
            src: [
                '*.css',
                '*.php'
            ]
        },
        options: {
            watchTask: true,
            debugInfo: true,
            host: '192.168.1.102',
            proxy: {
                host: 'wordpress.local',
                // port: 8001,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                }
            }
        }
    }
};
