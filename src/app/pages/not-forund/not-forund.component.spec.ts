import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotForundComponent } from './not-forund.component';

describe('NotForundComponent', () => {
  let component: NotForundComponent;
  let fixture: ComponentFixture<NotForundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotForundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotForundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
