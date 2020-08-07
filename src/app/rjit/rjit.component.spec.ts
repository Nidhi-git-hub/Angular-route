import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RjitComponent } from './rjit.component';

describe('RjitComponent', () => {
  let component: RjitComponent;
  let fixture: ComponentFixture<RjitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RjitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RjitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
