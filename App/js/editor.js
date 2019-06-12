CKEDITOR.config.height = 500;
CKEDITOR.config.width = 'auto';
CKEDITOR.disableAutoInline = true;
CKEDITOR.inline('editor');

var data = CKEDITOR.instances.editor.getData();
console.log(data);