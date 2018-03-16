import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapasDetailComponent } from './tapas-detail.component';

describe('TapasDetailComponent', () => {
  let component: TapasDetailComponent;
  let fixture: ComponentFixture<TapasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
