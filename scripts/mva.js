function lazyLoadExample() {
    var frame = $('#iframe__wrapper'),
        vidSource = $(frame).attr('data-src'),
        distance = $(frame).offset().top - $(window).scrollTop(),
        //distTopBot = Math.round(window.innerHeight - distance), // distance from top of frame to bottom of viewport
        distBotTop = Math.round(distance + $(frame).height()); // distance from bottom of frame to top of viewport

    document.getElementById('stick1').innerHTML = "distBotTop: " + distBotTop;
    document.getElementById('stick2').innerHTML = "distTopBot: " + distTopBot;
}
var throttled = _.throttle(lazyLoadExample, 100);
$(window).scroll(throttled);
