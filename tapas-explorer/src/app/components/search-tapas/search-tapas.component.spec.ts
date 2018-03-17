import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTapasComponent } from './search-tapas.component';

describe('SearchTapasComponent', () => {
  let component: SearchTapasComponent;
  let fixture: ComponentFixture<SearchTapasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTapasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
