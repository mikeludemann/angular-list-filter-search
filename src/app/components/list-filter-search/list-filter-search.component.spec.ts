import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilterSearchComponent } from './list-filter-search.component';

describe('ListFilterSearchComponent', () => {
  let component: ListFilterSearchComponent;
  let fixture: ComponentFixture<ListFilterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
