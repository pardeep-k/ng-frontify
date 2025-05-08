import { TestBed } from '@angular/core/testing';

import { NgFireChatService } from './ng-fire-chat.service';

describe('NgFireChatService', () => {
  let service: NgFireChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFireChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
