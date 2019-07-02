CKEDITOR.config.height = 800;
CKEDITOR.config.width = 'auto';
CKEDITOR.disableAutoInline = true;
CKEDITOR.inline('editor');




/**
 * Button row 
 */

//Star Icon Button
var i = 0;
var starIcon = document.getElementById("starIcon");
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

//Floppy Icon Button
var saveIcon = document.getElementById("saveIcon");
saveIcon.style.cursor = 'pointer';
saveIcon.onclick = function() {
    var data = CKEDITOR.instances.editor.getData();
    console.log(data);  

    var filename = "demo.jpg"
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
};