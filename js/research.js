function toggleParagraph(sectionId, type) {
    var paperParagraph = document.getElementById(sectionId + '-paper');
    var patentParagraph = document.getElementById(sectionId + '-patent');

    if (type === 'paper') {
        paperParagraph.style.display = (paperParagraph.style.display === 'none' || paperParagraph.style.display === '') ? 'block' : 'none';
        patentParagraph.style.display = 'none';
    } else if (type === 'patent') {
        patentParagraph.style.display = (patentParagraph.style.display === 'none' || patentParagraph.style.display === '') ? 'block' : 'none';
        paperParagraph.style.display = 'none';
    }
}



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

function toggleParagraph(section, type) {
    $("#" + section + "-" + type).slideToggle(500);
}