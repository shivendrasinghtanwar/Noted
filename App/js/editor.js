// CKEDITOR.config.height = 800;
// CKEDITOR.config.width = 'auto';
// CKEDITOR.disableAutoInline = true;
// CKEDITOR.inline('editor');


var editor = document.getElementById("editor");
var textArea = document.getElementById("txtArea");

/**
 * Button row 
 */

//Star Icon Button
var i = 0;
var starIcon = document.getElementById("starIcon");
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

    console.log(textArea.innerHTML);
    console.log(textArea.value);


    // editor.classList.add('downloadPage');
    // html2canvas(editor, {
    //     allowTaint: true,
    //     onrendered: function(canvas) {
    //         //
    //         canvas.classList.add('downloadPage');
    //         canvas.toBlob(function(blob) {
    //             // Generate file download
    //             // window.open(canvas.toDataURL());
    //             saveAs(blob, "yourwebsite_screenshot.jpeg");
    //             editor.classList.remove('downloadPage');
    //         });
    //     },
    // });

    textArea.value.replace(/\n/gi,'<br>')
    html2canvas(textArea, {
        allowTaint: true,
        onrendered: function(canvas) {
            //
            // canvas.classList.add('downloadPage');
            canvas.toBlob(function(blob) {
                // Generate file download
                // window.open(canvas.toDataURL());
                saveAs(blob, "screenshot2.jpeg");
                // editor.classList.remove('downloadPage');
            });
        },
    });

    // html2canvas(document.querySelector("#editor")).then(canvas => {
    //     var base64image = canvas.toDataURL("image/png");
    //     window.open(base64image , "_blank");
    // });



    // var filename = "demo.jpg"
    // var element = document.createElement('a');
    // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    // element.setAttribute('download', filename);
  
    // element.style.display = 'none';
    // document.body.appendChild(element);
  
    // element.click();
  
    // document.body.removeChild(element);
};