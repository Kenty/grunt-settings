module.exports = {
    myPngs: {
        options: {
            jpegMini: false,
            imageAlpha: true,
            quitAfter: true
        },
        src: ['assets/img/src'],
        dest: ['assets/img/dest']
    },
    myJpgs: {
        options: {
            jpegMini: true,
            imageAlpha: false,
            quitAfter: true
        },
        src: ['assets/img/src'],
        dest: ['assets/img/dest']
    }
};
