(function($) {

    "use strict";

    var fullHeight = function() {

        $('.images-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.images-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

})(jQuery);
