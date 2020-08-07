import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformapiComponent } from './reactiveformapi.component';

describe('ReactiveformapiComponent', () => {
  let component: ReactiveformapiComponent;
  let fixture: ComponentFixture<ReactiveformapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
