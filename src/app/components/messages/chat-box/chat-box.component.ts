import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  @Input() user: any = {};
  @Input() messages: Array<object> = [];

  @Output() sendMsg = new EventEmitter<any>();

  constructor() {}
  imgs = [];
  ngOnInit() {}
  readUrl(event: any) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      let img = reader.result.toString();
      // let base = reader.result.toString();
      console.log(img);
      this.imgs.push(img);
    };
  }
}
