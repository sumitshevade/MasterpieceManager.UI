import { TestBed } from '@angular/core/testing';

import { ContactListTableService } from './contact-list-table.service';

describe('ContactListTableService', () => {
  let service: ContactListTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactListTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
