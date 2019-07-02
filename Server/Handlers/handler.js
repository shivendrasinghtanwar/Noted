var fs = require("fs");

// var data = CKEDITOR.instances.editor.getData();
var data = "hello"
module.exports = {
    saveNote: function() {
        //Floppy Icon Button
        var saveIcon = document.getElementById("saveIcon");
        saveIcon.style.cursor = 'pointer';
        saveIcon.onclick = function() {

            fs.writeFile("temp.txt", data, (err) => {
                if (err) console.log(err);
                console.log("Successfully Written to File.");
            });
        };
    }
}