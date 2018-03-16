import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapasEditorComponent } from './tapas-editor.component';

describe('TapasEditorComponent', () => {
  let component: TapasEditorComponent;
  let fixture: ComponentFixture<TapasEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapasEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapasEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
