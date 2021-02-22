import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { EditorChoiceService } from 'src/app/shared/service/editor-choice/editor-choice.service';

@Component({
  selector: 'app-editor-choice',
  templateUrl: './editor-choice.component.html',
  styleUrls: ['./editor-choice.component.scss'],
})
export class EditorChoiceComponent implements OnInit {
  loading: boolean = false;

  tabsStructure = [
    {
      tab: 'Products',
      tabIcon: 'user',
      // buttons: ['Approve', 'Reject'],
      url: 'product',
      params: 'status=2',
      cardButtons: [false, true, false],
      // rejectModal: false,
    },
    {
      tab: 'Editor Choice',
      tabIcon: 'settings',

      url: 'product/get-editors-pick',
      cardButtons: [false, false, true],
      rejectModal: false,
      // buttons: ['Remove From Approved']
    },
    // {
    //   tab: 'Rejected',
    //   tabIcon: 'settings',
    //   params: 'status=1',
    //   cardButtons: [true, true, false],
    //   //  buttons: ['Remove From Rejected']
    // },
  ];
  constructor(
    private editorService: EditorChoiceService,
    private cs: CommonService
  ) {
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  ngOnInit(): void {}

  getData(data) {
    console.log(data);

    if (data.tab) {
      this.editorService
        .removeToEditorsPick(data.selected[0])
        .subscribe((res) => {
          this.cs.isLoading.next(false);
          console.log(res);
        });
    } else {
      this.editorService.addToEditorsPick(data.selected[0]).subscribe((res) => {
        this.cs.isLoading.next(false);
        console.log(res);
      });
    }
  }
  onEdit(id) {
    console.log(id);
  }

  onApprove(id) {
    this.editorService
      .addToEditorsPick({ productList: [id] })
      .subscribe((res) => {
        this.cs.isLoading.next(false);
        console.log(res);
      });
  }
  onReject(data) {
    // where to put reason in payload
    console.log(data);

    this.editorService
      .removeToEditorsPick({ productList: [data] })
      .subscribe((res) => {
        this.cs.isLoading.next(false);
        console.log(res);
      });
  }
  onPending(id) {
    let temp = { productList: { [id]: 0 } };
    this.updateProductStatus(temp);
  }

  updateProductStatus(temp) {
    this.editorService.addToEditorsPick(temp).subscribe((res) => {
      this.cs.isLoading.next(false);
      console.log(res);
    });
  }
}
