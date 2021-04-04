import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Paginate } from 'src/app/shared/interfaces/pagination';
// import { notificationDB } from '../../../shared/tables/notificationDB';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BlastNotificationsService } from 'src/app/shared/service/blast-notifications/blast-notifications.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public notifications = [];
  public loading: boolean = false;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  public pagination: Paginate = {
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    PageSize: 10,
    TotalCount: 0,
    TotalPages: 1,
  };
  selectedRow;
  public closeResult: string;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  constructor(
    private router: Router,
    private notificationService: BlastNotificationsService,
    public translate: TranslateService,
    private cs: CommonService,
    private modalService: NgbModal
  ) {
    // this.notifications = notificationDB.list_return;
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  open(content) {
    console.log(content);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.selectedRow = null;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.selectedRow = null;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addNotification() {
    this.router.navigate(['/notifications/add-notification']);
  }
  getFormatDate(date) {
    return moment(date).format('MMM DD,YY');
  }

  onSelectRow(data) {
    console.log(data);
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.notifications.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.notifications = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  ngOnInit() {
    this.fetchNotifications();
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchNotifications();
  }

  fetchNotifications() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `?PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.notificationService.getNotifications(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.notifications = res.body || [];
          let paginate = JSON.parse(res.headers.get('X-Pagination'));
          if (paginate) this.pagination = paginate;
          console.log('pagination', this.pagination);
        }
      }
      //  ,err => {
      //   this.loading = false;
      //  }
    );
  }

  onEdit(val) {
    console.log('row click', val);
    this.router.navigate(['/notifications/edit-notification/', val]);
  }

  onDelete(val) {
    console.log('row click', val);
  }

  setPage(page) {
    console.log('page--', page);
  }

  openModal(data, content) {
    console.log(data);

    this.selectedRow = data;
    this.open(content);
  }
}
