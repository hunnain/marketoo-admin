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
}
