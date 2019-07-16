import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactImageDetailsComponent } from './contact-image-details.component';

describe('ContactImageDetailsComponent', () => {
  let component: ContactImageDetailsComponent;
  let fixture: ComponentFixture<ContactImageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactImageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
