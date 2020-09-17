jQuery(document).ready(function() {
    jQuery('.choose__main').addClass('choose__main').viewportChecker({
        classToAdd: 'final__section',
        classToRemove: 'choose__main',
        offsetHeight: 600,
    });
    jQuery('.main__photorow').addClass("grayscaled").viewportChecker({
        classToAdd: 'final',
        classToRemove: 'grayscaled',
        offset: 600,
    });

    jQuery('.main__vectorrow').addClass("grayscaled").viewportChecker({
        classToAdd: 'final',
        classToRemove: 'grayscaled',
        offset: 400,
    });

    jQuery('.main__zonerow').addClass("zoneInvisible").viewportChecker({
        classToAdd: 'zoneVisible',
        classToRemove: 'zoneInvisible',
        offset: 400,
    });

    jQuery('.miofascia').addClass('miofascia').viewportChecker({
        classToAdd: 'miofasciaFinal',
        classToRemove: 'miofascia',
        offset: 600,
    });
});