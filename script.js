// Scroll feature
$(document).ready(function() {
    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);

    if (page_id === "aboutMe") {

        $("html, body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        }, 1000);

    } else if (page_id === "projects") {

        $("html, body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
       }, 1000);

    } else if (page_id === "contact") {

        $("html, body").animate({
            scrollTop: $("#scroll-" + page_id).offset().top
       }, 1000);
    }   
});