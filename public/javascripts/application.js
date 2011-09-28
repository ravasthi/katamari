(function($) {
    $(function() {
        /*
        ** Add classes to the html tag if the browser is a version of Internet
        ** Explorer. Inspired by
        **  <paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/>.
        ** 
        ** It turns out that the method outlined there doesn't work well with
        ** the Wicket framework <wicket.apache.org/>, so I'm going with an all-
        ** JavaScript solution. Key off the classes assigned by this function
        ** to write your IE-specific styles in ie.css, included above.
        */
        $("html").addClass(fiftyfive.util.getIEClass());
        if(navigator.userAgent.match(/Firefox/i))
        {
            $("html").addClass("ff");
        }

        // http://adactio.com/journal/4470/
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i))
        {
            var viewportmeta = $('meta[name="viewport"]');
            if (viewportmeta.length > 0)
            {
                viewportmeta.attr("content",
                    "width=device-width, minimum-scale=1.0, maximum-scale=1.0");
                $("body").bind("gesturestart", function() {
                    viewportmeta.attr("content",
                        "width=device-width, minimum-scale=0.25, maximum-scale=1.6");
                });
            }
        }
    });
})(jQuery);

