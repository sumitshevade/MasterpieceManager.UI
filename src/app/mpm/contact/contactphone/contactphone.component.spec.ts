import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactphoneComponent } from './contactphone.component';

describe('ContactphoneComponent', () => {
  let component: ContactphoneComponent;
  let fixture: ComponentFixture<ContactphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
