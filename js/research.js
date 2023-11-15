$(document).ready(function () {
    $(".nav-link-research").click(function () {
        var linkText = $(this).text().toLowerCase();
        var section = linkText.substring(0, linkText.indexOf(' '));
        var type = linkText.substring(linkText.indexOf(' ') + 1).toLowerCase();

        toggleParagraph(section, type);
    });
});

function toggleParagraph(sectionId, type) {
    var paperParagraph = $("#" + sectionId + '-paper');
    var patentParagraph = $("#" + sectionId + '-patent');

    var deferred = $.Deferred();

    if (type === 'paper') {
        if (patentParagraph.is(":visible")) {
            patentParagraph.slideUp(500, function () {
                paperParagraph.slideToggle(500, deferred.resolve);
            });
        } else {
            paperParagraph.slideToggle(500, deferred.resolve);
        }
    } else if (type === 'patent') {
        if (paperParagraph.is(":visible")) {
            paperParagraph.slideUp(500, function () {
                patentParagraph.slideToggle(500, deferred.resolve);
            });
        } else {
            patentParagraph.slideToggle(500, deferred.resolve);
        }
    }

    // $.when(deferred).done(function () {
    //     // Code to execute after the animation is complete (if needed)
    // });
}
