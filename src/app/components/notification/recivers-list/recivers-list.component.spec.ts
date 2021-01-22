import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciversListComponent } from './recivers-list.component';

describe('ReciversListComponent', () => {
  let component: ReciversListComponent;
  let fixture: ComponentFixture<ReciversListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciversListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciversListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
