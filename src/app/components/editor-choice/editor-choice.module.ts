import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorChoiceRoutingModule } from './editor-choice-routing.module';
import { EditorChoiceComponent } from './editor-choice.component';
import { CountToModule } from 'angular-count-to';
import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [EditorChoiceComponent],
  imports: [
    CommonModule,
    EditorChoiceRoutingModule,
    CountToModule,
    SharedModule,
    ChartsModule,
    Ng2GoogleChartsModule,
    NgxChartsModule,
    ChartistModule,
  ],
})
export class EditorChoiceModule {}
