$(document).ready(function () {
    $(".nav-link-research").click(function () {
        // Extract section and type from the clicked link
        var linkText = $(this).text().toLowerCase();
        var section = linkText.substring(0, linkText.indexOf(' '));
        var type = linkText.substring(linkText.indexOf(' ') + 1).toLowerCase();

        // Call the toggleParagraph function with section and type
        toggleParagraph(section, type);
    });
});

function toggleParagraph(sectionId, type) {
    var paperParagraph = $("#" + sectionId + '-paper');
    var patentParagraph = $("#" + sectionId + '-patent');

    if (type === 'paper') {
        if (paperParagraph.is(":visible")) {
            paperParagraph.slideUp(500);
        } else {
            paperParagraph.slideDown(500);
            patentParagraph.slideUp(500);
        }
    } else if (type === 'patent') {
        if (patentParagraph.is(":visible")) {
            patentParagraph.slideUp(500);
        } else {
            patentParagraph.slideDown(500);
            paperParagraph.slideUp(500);
        }
    }
}