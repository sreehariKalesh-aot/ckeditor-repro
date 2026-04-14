/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Comments from '@ckeditor/ckeditor5-comments/src/comments.js';
import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter.js';
import DataSchema from '@ckeditor/ckeditor5-html-support/src/dataschema.js';
import DocumentList from '@ckeditor/ckeditor5-list/src/documentlist.js';
import DocumentListProperties from '@ckeditor/ckeditor5-list/src/documentlistproperties.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
// import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf.js';
// import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword.js';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Style from '@ckeditor/ckeditor5-style/src/style.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
// import Table from '@ckeditor/ckeditor5-table/src/table.js';
// import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
// import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
// import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
// import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
// import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { TrackChanges, TrackChangesData } from '@ckeditor/ckeditor5-track-changes';
import WProofreader from '@webspellchecker/wproofreader-ckeditor5/src/wproofreader';

import { RevisionHistory } from '@ckeditor/ckeditor5-revision-history';
import { Autosave } from '@ckeditor/ckeditor5-autosave';


class Editor extends ClassicEditor { }

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	CloudServices,
	Comments,
	DataFilter,
	DataSchema,
	DocumentList,
	DocumentListProperties,
	Essentials,
	// ExportPdf,
	// ExportWord,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	Indent,
	IndentBlock,
	Italic,
	Link,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	StandardEditingMode,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	// Table,
	// TableCaption,
	// TableCellProperties,
	// TableColumnResize,
	// TableProperties,
	// TableToolbar,
	TextPartLanguage,
	Underline,
	WordCount,
	// List,
	// ListProperties,
	TrackChanges,
	TrackChangesData,
	WProofreader,
	RevisionHistory,
	Autosave
];

// Editor configuration.
Editor.defaultConfig = {
	// toolbar: {
	// 	items: [
	// 		'bold',
	// 		'italic',
	// 		'underline',
	// 		'strikethrough',
	// 		'link',
	// 		'|',
	// 		'bulletedList',
	// 		'numberedList',
	// 		'|',
	// 		'outdent',
	// 		'indent',
	// 		'alignment',
	// 		'|',
	// 		'fontColor',
	// 		'fontBackgroundColor',
	// 		'fontFamily',
	// 		'fontSize',
	// 		'highlight',
	// 		'findAndReplace',
	// 		'|',
	// 		'removeFormat',
	// 		'subscript',
	// 		'superscript',
	// 		'specialCharacters',
	// 		'horizontalLine',
	// 		'blockQuote',
	// 		// 'insertTable',
	// 		'pageBreak',
	// 		'|',
	// 		'undo',
	// 		'redo',
	// 		'|',
	// 		'comment',
	// 		'commentsArchive',
	// 		'trackChanges',
	// 		'wproofreader',
	// 		'|',
	// 		'revisionHistory'
	// 		// 'exportPdf',
	// 		// 'exportWord'
	// 	]
	// },
	language: 'en',
	comments: {
		editorConfig: {
			extraPlugins: [
				Autoformat,
				Bold,
				Italic,
				// List
			]
		}
	},
	licenseKey: process.env.VUE_APP_CKEDITOR_LICENSE_KEY, 
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		],
		tableToolbar: [
			'comment'
		]
	},
	wproofreader: {
		lang: 'auto',
		serviceId: process.env.VUE_APP_CKEDITOR_WPROOFREADER_SERVICE_ID,
		srcUrl: 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js'
	}
	// comments: {
	// 	editorConfig: {
	// 		extraPlugins: [
	// 			Bold,
	// 			Italic,
	// 			Autoformat
	// 		]
	// 	}
	// }
};

export default Editor;