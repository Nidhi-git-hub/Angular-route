import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisetupComponent } from './apisetup.component';

describe('ApisetupComponent', () => {
  let component: ApisetupComponent;
  let fixture: ComponentFixture<ApisetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApisetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
