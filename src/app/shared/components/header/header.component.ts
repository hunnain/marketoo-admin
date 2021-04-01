import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceService } from '../../service/auth-service/auth-service.service';
import { NavService } from '../../service/nav.service';
import { PushNotificationService } from '../../service/pushNotification.service';
import { SignalrService } from '../../service/signalr.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public right_sidebar: boolean = false;
  public open: boolean = false;
  public openNav: boolean = false;
  public isOpenMobile: boolean;

  @Output() rightSidebarEvent = new EventEmitter<boolean>();
  public isTranslate: boolean = false;
  constructor(
    public navServices: NavService,
    private authService: AuthServiceService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService,
    public signalRService: SignalrService,
    private pnService: PushNotificationService
  ) { }

  collapseSidebar() {
    this.open = !this.open;
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }
  right_side_bar() {
    this.right_sidebar = !this.right_sidebar;
    this.rightSidebarEvent.emit(this.right_sidebar);
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  changeLanguage() {
    this.isTranslate = !this.isTranslate;

    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(this.isTranslate ? 'zh-Hant' : 'en');
    }
  }

  onLogout() {
    console.log('logout');
    this.authService.logout().subscribe(res => {
      if (res && this.pnService.pushNotificationStatus.isSubscribed) {
        this.pnService.unsubscribeUser();
      }
      setTimeout(() => {
        localStorage.clear();
      }, 2000)
    })
    // localStorage.removeItem('userInfo');
    // localStorage.removeItem('userInfo');
    // localStorage.removeItem('userInfo');
  }

  ngOnInit() { }
  formatType(type) {
    let formattedType = type.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")
    return formattedType;
  }
}
