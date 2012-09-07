jQuery.noConflict();
jQuery(function($) {
        
    /* Liens externes */
    
    if($('.ext').lenght) {
        $('.ext').attr('target', '_blank');
    }
        
}); /* jQuery end */

/**
// Debug mode
**
function log($message) {
    if (console && console.log)
        console.log($message);
    else
        alert($message);
}

function info($message) {
    if (console && console.info)
        console.info($message);
    else
        alert($message);
}

function warn($message) {
    if (console && console.warn)
        console.warn($message);
    else
        alert($message);
}

function error($message) {
    if (console && console.error)
        console.error($message);
    else
        alert($message);
}
/* Debug end */