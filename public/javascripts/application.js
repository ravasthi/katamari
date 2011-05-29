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
        $("html").addClass(getIEClass());
        if(isFirefox())
        {
            $("html").addClass("ff");
        }
    });
})(jQuery);

