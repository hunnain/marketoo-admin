import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorChoiceComponent } from './editor-choice.component';

describe('EditorChoiceComponent', () => {
  let component: EditorChoiceComponent;
  let fixture: ComponentFixture<EditorChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
