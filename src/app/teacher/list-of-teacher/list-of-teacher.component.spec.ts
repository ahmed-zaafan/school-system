import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTeacherComponent } from './list-of-teacher.component';

describe('ListOfTeacherComponent', () => {
  let component: ListOfTeacherComponent;
  let fixture: ComponentFixture<ListOfTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
