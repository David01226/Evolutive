jQuery(document).ready(function () {
    AOS.init();
    jQuery(".arrow-btn").click(function(){
        jQuery("html,body").animate({
            scrollTop: jQuery(".evo-in-action").offset().top
        }, 500);
    });

});

