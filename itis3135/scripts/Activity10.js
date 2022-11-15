$(document).ready(function () {
    // preload the image for each link
    $("#image_list a").each(function () {
        (new Image()).src = $(this).attr("href");
    });

    // set up the event handlers for each link
    $("#image_list a").click(function (event) {
        let url = $(this).attr("href")
        let caption = $(this).attr("title")

        // get the image URL and caption for each image and animate the caption
        $("#caption").fadeOut(1000, function () {
            $("#caption").text(caption).fadeIn(1000);
        });

        $("#image").fadeOut(1000, function () {
            $("#image").attr("src", url).fadeIn(1000);
        });

        // cancel the default action of each link
        event.preventDefault();
    })

    // move the focus to the first link
    $("li:first-child a").focus();

}); // end ready
