import { TestBed } from '@angular/core/testing';

import { TestWidgetService } from './test-widget.service';

describe('TestWidgetService', () => {
  let service: TestWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
