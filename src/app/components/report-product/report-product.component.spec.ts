import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductComponent } from './report-product.component';

describe('ReportProductComponent', () => {
  let component: ReportProductComponent;
  let fixture: ComponentFixture<ReportProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
