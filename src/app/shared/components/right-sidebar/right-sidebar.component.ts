import { Component, Input, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  @Output() selectUser = new EventEmitter<any>();

  @Input() allUsers: Array<any> = [];
  @Input() onlineUsers: Array<any> = [];
  @Input() loading: boolean = false;

  public isSeller: boolean = true;

  public sellers: Array<any> = []
  public customers: Array<any> = []
  constructor() { }

  // public users = [
  //   {
  //     id: 1,
  //     img: 'assets/images/dashboard/user.png',
  //     name: 'Vincent Porter',
  //     role: 'customer',
  //     status: 'Online',
  //   },
  //   {
  //     id: 2,
  //     img: 'assets/images/dashboard/user1.jpg',
  //     name: 'Ain Chavez',
  //     role: 'customer',
  //     status: '28 minutes ago',
  //   },
  //   {
  //     id: 3,
  //     img: 'assets/images/dashboard/user2.jpg',
  //     name: 'Kori Thomas',
  //     role: 'seller',
  //     status: 'Online',
  //   },
  //   {
  //     id: 4,
  //     img: 'assets/images/dashboard/user3.jpg',
  //     name: 'Erica Hughes',
  //     role: 'seller',
  //     status: 'Online',
  //   },
  //   {
  //     id: 5,
  //     img: 'assets/images/dashboard/man.png',
  //     name: 'Ginger Johnston',
  //     role: 'seller',
  //     status: '2 minutes ago',
  //   },
  //   {
  //     id: 6,
  //     img: 'assets/images/dashboard/user5.jpg',
  //     name: 'Prasanth Anand',
  //     role: 'seller',
  //     status: '2 hour ago',
  //   },
  //   {
  //     id: 7,
  //     img: 'assets/images/dashboard/designer.jpg',
  //     name: 'Hileri Jecno',
  //     role: 'customer',
  //     status: 'Online',
  //   },
  // ];



  ngOnChanges(change: SimpleChange) {
    console.log('💻', 'on change', change);
    if (change['allUsers']) {
      let userChange = change['allUsers'];
      let user_prev = userChange.previousValue;
      let user_curr = userChange.currentValue;

      if (!user_prev || user_curr !== user_prev) {
        this.allUsers = user_curr;
        if (this.allUsers.length) {
          const groupz = this.groupBy(this.allUsers);
          this.sellers = groupz['seller'] || []
          this.customers = groupz['customer'] || []
        }

      }
    }
  }
  ngOnInit() {
    // this.sellers = this.users.filter(item => item.role.toLowerCase() === 'seller');
    // this.customers = this.users.filter(item => item.role.toLowerCase() === 'customer');

  }

  onUserClick(val) {
    this.selectUser.emit(val);
  }
  changeSellerCustomer() {
    this.isSeller = !this.isSeller;
  }

  userStatus(userId) {
    // console.log('💻', userId, this.onlineUsers, this.onlineUsers.includes(userId));
    if (this.onlineUsers.length && this.onlineUsers.includes(userId)) {
      return true;
    }
    return false;
  }


  groupBy(arr) {
    let group = arr.reduce((r, a) => {
      r[a.role.toLowerCase()] = [...r[a.role.toLowerCase()] || [], a];
      return r;
    }, {});

    return group;
  }
}
