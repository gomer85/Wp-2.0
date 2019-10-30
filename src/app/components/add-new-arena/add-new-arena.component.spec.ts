import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewArenaComponent } from './add-new-arena.component';

describe('AddNewArenaComponent', () => {
  let component: AddNewArenaComponent;
  let fixture: ComponentFixture<AddNewArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
