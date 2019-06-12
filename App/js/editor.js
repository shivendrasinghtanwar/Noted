CKEDITOR.config.height = 500;
CKEDITOR.config.width = 'auto';
CKEDITOR.disableAutoInline = true;
CKEDITOR.inline('editor');

var data = CKEDITOR.instances.editor.getData();
console.log(data);


/**
 * Button row 
 */
var i = 0;
var starIcon = document.getElementById("starIcon")
starIcon.style.cursor = 'pointer';
starIcon.onclick = function() {
    if (i % 2 == 0) {
        starIcon.classList.remove('glyphicon-star-empty');
        starIcon.classList.add('glyphicon-star');
        i++
    } else {
        starIcon.classList.remove('glyphicon-star');
        starIcon.classList.add('glyphicon-star-empty');
        i++
    }
};