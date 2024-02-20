/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.editorConfig = function(config) {
    // Define changes to default configuration here.
    // For complete reference see:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config
    config.extraPlugins = 'autogrow,youtube';
    config.autoGrow_maxHeight = '1200';
    config.skin = 'bootstrapck';
    config.fillEmptyBlocks = false;
    config.autoParagraph = false;
    config.allowedContent = true;
    config.filebrowserUploadUrl = '';
    // The toolbar groups arrangement, optimized for two toolbar rows.
    config.toolbarGroups = [
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
        { name: 'links' },
        { name: 'insert' },
        { name: 'forms' },
        { name: 'tools' },
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'others' },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
        { name: 'styles' },
        { name: 'colors' }
    ];

    // Remove some buttons provided by the standard plugins, which are
    // not needed in the Standard(s) toolbar.
    config.removeButtons = 'Underline,Subscript,Superscript';

    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';


    // Simplify the dialog windows.
    config.removeDialogTabs = 'image:advanced;link:advanced';
};

CKEDITOR.config.extraPlugins = 'filebrowser';
CKEDITOR.config.extraPlugins = 'uploadimage';
CKEDITOR.config.extraPlugins = 'imageuploader';
CKEDITOR.config.filebrowserBrowseUrl = '/admin/resources/editer/image';
CKEDITOR.config.filebrowserUploadUrl = '/admin/resources';
CKEDITOR.config.filebrowserWindowWidth = '720';
CKEDITOR.config.filebrowserWindowHeight = '550';
CKEDITOR.config.image_previewText = ' ';
CKEDITOR.config.removeDialogTabs = 'link:upload;image:Upload';