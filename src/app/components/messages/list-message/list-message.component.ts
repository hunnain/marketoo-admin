import { Component, OnInit, ViewChild } from '@angular/core';
import { SignalrService } from 'src/app/shared/service/signalr.service';
import { ChatBoxComponent } from '../chat-box/chat-box.component';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.scss']
})
export class ListMessageComponent implements OnInit {
  @ViewChild('chatBox') chatBox: ChatBoxComponent;
  public selectedUser: any = {};
  public allUsers: any[] = [];
  public messages: any[] = [];
  public loadingMessages: boolean = false;
  public loadingUsers: boolean = false;
  public openChatScreen: boolean = false;


  public text: string = "";
  public receiver_id: string = "";
  public userId: string = "";
  constructor(
    public signalRService: SignalrService,
  ) {
  }

  ngOnInit() {
    this.getSellersList();
    this.createConnection()
  }

  ngOnDestroy() {
    this.signalRService.disconnection('ChatHub')
  }

  createConnection() {
    this.signalRService.connect();
  }

  getSellersList() {
    this.loadingUsers = true;
    this.signalRService.getChatList().subscribe(res => {
      console.log('chat list', res);
      this.loadingUsers = false;
      if (res && res['body'] && res['body'].senderList) {
        this.allUsers = res['body'].senderList;
      }
    })
  }

  openChat(user) {
    this.openChatScreen = true;
    console.log("user", user)
    this.selectedUser = user;
    this.getMessages(user.senderId)
  }

  sendMessage({ msg, images }): void {
    let data = {
      text: msg,
      receiverId: this.selectedUser.senderId,
      images
    }
    // you can send the messge direclty to the hub or use the api controller.
    // choose wisely
    this.signalRService.sendMessageToApi(data).subscribe(res => {
      if (res) {
        this.chatBox.resetState();
      }
    });

    // this.signalRService.sendMessageToHub(data).subscribe({
    //   next: _ => this.text = '',
    //   error: (err) => console.error(err)
    // });
  }


  getMessages(id) {
    this.loadingMessages = true
    this.signalRService.getChatMessage(id).subscribe(res => {
      console.log("get component res get messages", res)
      this.loadingMessages = false
      // if (res) {
      // this.messages = res['body'].messages;
      // }
    });
  }

}
