import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss'],
})
export class AddNotificationComponent implements OnInit {
  public selectedUser: any = {};
  public openChatScreen: boolean = false;

  public dummyMessages = [
    {
      user_id: 1,
      message: 'hello there',
    },
    {
      user_id: 2,
      message: 'Hi, how are you?',
    },
    {
      user_id: 1,
      message: "I'm, how are you?",
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  openChat(user) {
    this.openChatScreen = true;
    console.log('user', user);
    this.selectedUser = user;
  }

  uploadImage = null;
  //FileUpload
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
      let base = reader.result.toString();
      console.log(base);

      this.uploadImage = base;
    };
  }

  removeBase64(data) {
    let base = data;
    let splited = base.split('base64,');
    let byteImg = splited[1];
    return byteImg;
  }

  addBase64(data) {
    let base = `data:image/jpeg;base64,${data}`;
    return base;
  }
}
