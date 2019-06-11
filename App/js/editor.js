const { AlloyEditor } = require('alloyeditor')

var alloyEditor = AlloyEditor.editable('alloy-editor-container');

var content = alloyEditor.get('nativeEditor').getData();