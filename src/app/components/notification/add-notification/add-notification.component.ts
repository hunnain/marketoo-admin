import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlastNotificationsService } from 'src/app/shared/service/blast-notifications/blast-notifications.service';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss'],
})
export class AddNotificationComponent implements OnInit {
  public selectedUser: any = {};
  // public openChatScreen: boolean = false;
  public content = '';
  public loading: boolean = false;

  constructor(
    private notificationService: BlastNotificationsService,
    private cs: CommonService,
    private router: Router
  ) {
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  ngOnInit(): void {}

  // openChat(user) {
  //   this.openChatScreen = true;
  //   console.log('user', user);
  //   this.selectedUser = user;
  // }

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

  handleChange(data) {
    this.content = data;
  }

  onAddNotification(type) {
    this.loading = true;
    let data = { SendTo: type, content: this.content };
    this.notificationService.addNotification(data).subscribe((res) => {
      this.loading = false;
      this.router.navigate(['/notifications']);
    });
  }
}
