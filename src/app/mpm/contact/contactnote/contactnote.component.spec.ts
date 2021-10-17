import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnoteComponent } from './contactnote.component';

describe('ContactnoteComponent', () => {
  let component: ContactnoteComponent;
  let fixture: ComponentFixture<ContactnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
