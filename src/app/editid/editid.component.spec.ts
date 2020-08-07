import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditidComponent } from './editid.component';

describe('EditidComponent', () => {
  let component: EditidComponent;
  let fixture: ComponentFixture<EditidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
