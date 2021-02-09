import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements OnInit {
  @Input() text;
  @Output() textEmit = new EventEmitter<any>();
  htmlContent;
  control;
  constructor() {
    this.htmlContent = this.text;
    this.control = new FormControl(this.text);
  }

  onModelChange(event) {
    // console.log(event, 'asd');
    this.textEmit.emit(event);
    // changes.prop contains the old and the new value...
  }

  // toolbarHiddenButtons: [
  //   [
  //     'undo',
  //     'redo',
  //     'bold',
  //     'italic',
  //     'underline',
  //     'strikeThrough',
  //     'subscript',
  //     'superscript',
  //     'justifyLeft',
  //     'justifyCenter',
  //     'justifyRight',
  //     'justifyFull',
  //     'indent',
  //     'outdent',
  //     'insertUnorderedList',
  //     'insertOrderedList',
  //     'heading',
  //     'fontName'
  //   ],
  //   [
  //     'fontSize',
  //     'textColor',
  //     'backgroundColor',
  //     'customClasses',
  //     'link',
  //     'unlink',
  //     'insertImage',
  //     'insertVideo',
  //     'insertHorizontalRule',
  //     'removeFormat',
  //     'toggleEditorMode'
  //   ]
  // ];

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'bold',
        'insertImage',
        'insertVideo',
        'link',
        'unlink',
        'toggleEditorMode',
        'textColor',
        'backgroundColor',
      ],
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  ngOnInit(): void {
    this.htmlContent = this.text;
  }
}
