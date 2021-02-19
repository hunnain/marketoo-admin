import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorChoiceComponent } from './editor-choice.component';

const routes: Routes = [
  {
    path: '',
    component: EditorChoiceComponent,
    data: {
      title: 'Editor Choice',
      breadcrumb: 'Editor Choice',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorChoiceRoutingModule {}
