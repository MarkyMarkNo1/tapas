import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapasCreatorComponent } from './tapas-creator.component';

describe('TapasCreatorComponent', () => {
  let component: TapasCreatorComponent;
  let fixture: ComponentFixture<TapasCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapasCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapasCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
