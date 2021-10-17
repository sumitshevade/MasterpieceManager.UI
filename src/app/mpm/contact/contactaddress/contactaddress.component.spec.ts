import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaddressComponent } from './contactaddress.component';

describe('ContactaddressComponent', () => {
  let component: ContactaddressComponent;
  let fixture: ComponentFixture<ContactaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
