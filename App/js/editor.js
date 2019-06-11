CKEDITOR.disableAutoInline = true;
CKEDITOR.inline('editor');

var data = CKEDITOR.instances.editor.getData();
console.log(data);