import { TestBed } from '@angular/core/testing';

import { EditorChoiceService } from './editor-choice.service';

describe('EditorChoiceService', () => {
  let service: EditorChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
