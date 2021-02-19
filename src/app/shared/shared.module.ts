import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelect2Module } from 'ng-select2';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavService } from './service/nav.service';
import { WINDOW_PROVIDERS } from './service/windows.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterialModule } from '../material.module';
import { EmailChipInputComponent } from './components/email-chip-input/email-chip-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { CropperComponent } from './components/cropper/cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ButtonComponent } from './components/button/button.component';
import { ProductTabViewComponent } from './components/product-tab-view/product-tab-view.component';
@NgModule({
  declarations: [
    ToggleFullscreenDirective,
    FeatherIconsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentLayoutComponent,
    BreadcrumbComponent,
    RightSidebarComponent,
    LoaderComponent,
    EmailChipInputComponent,
    TextEditorComponent,
    CropperComponent,
    ButtonComponent,
    ProductTabViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelect2Module,
    AngularEditorModule,
    HttpClientModule,
    MatPaginatorModule,
    NgbModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
  ],
  providers: [NavService, WINDOW_PROVIDERS],
  exports: [
    NgSelect2Module,
    FeatherIconsComponent,
    NgbModule,
    ToggleFullscreenDirective,
    RightSidebarComponent,
    TranslateModule,
    // AngularEditorModule,
    // HttpClientModule,
    MatPaginatorModule,
    LoaderComponent,
    EmailChipInputComponent,
    TextEditorComponent,
    CropperComponent,
    ButtonComponent,
    ProductTabViewComponent,
    ImageCropperModule,
  ],
})
export class SharedModule {}
