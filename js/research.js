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
