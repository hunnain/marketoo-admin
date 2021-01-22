import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recivers-list',
  templateUrl: './recivers-list.component.html',
  styleUrls: ['./recivers-list.component.scss']
})
export class ReciversListComponent implements OnInit {
  public selectedUser: any= {};
  public openChatScreen: boolean = false;

  public dummyMessages = [
    {
      user_id:1,
      message:'hello there'
    },
    {
      user_id:2,
      message:'Hi, how are you?'
    },
    {
      user_id:1,
      message:"I'm, how are you?"
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
