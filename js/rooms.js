//rooms adjusting size
$(document).ready(function () {
    let actualImage = new Image();
    actualImage.src = $('.rooms_background').css('background-image').replace(/"/g, "").replace(/url\(|\)$/ig, "");
    let imageHeight = actualImage.height
    let imageWidth = actualImage.width
    let windowHeight = $(window).height()
    let windowWidth = $(window).width()
    if ((windowHeight / windowWidth) < 0.51 && (windowHeight / windowWidth) < 0.5625) {
        $('.rooms_inside_box').css('height', '100vh');
        $('.rooms_inside_box').css('width', '178vh');
        $('.rooms_left_bar').css('left', '0');
    } else if (windowHeight / windowWidth < 0.5625) {
        $('.rooms_inside_box').css('height', '100vh');
        $('.rooms_inside_box').css('width', '178vh');
        $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
    } else {
        $('.rooms_inside_box').css('height', '57vw');
        $('.rooms_inside_box').css('width', '100vw');
        $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
    }
});
$(window).resize(function () {
    let actualImage = new Image();
    actualImage.src = $('.rooms_background').css('background-image').replace(/"/g, "").replace(/url\(|\)$/ig, "");
    let imageHeight = actualImage.height
    let imageWidth = actualImage.width
    let windowHeight = $(window).height()
    let windowWidth = $(window).width()
    if ((windowHeight / windowWidth) < 0.51 && (windowHeight / windowWidth) < 0.5625) {
        $('.rooms_inside_box').css('height', '100vh');
        $('.rooms_inside_box').css('width', '178vh');
        $('.rooms_left_bar').css('left', '0');
    } else if (windowHeight / windowWidth < 0.5625) {
        $('.rooms_inside_box').css('height', '100vh');
        $('.rooms_inside_box').css('width', '178vh');
        $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
    } else {
        $('.rooms_inside_box').css('height', '56vw');
        $('.rooms_inside_box').css('width', '100vw');
        $('.rooms_left_bar').css('left', 'calc(3vw + 2vh + 1vmin)');
    }
});