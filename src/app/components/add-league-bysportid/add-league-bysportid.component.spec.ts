import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeagueBysportidComponent } from './add-league-bysportid.component';

describe('AddLeagueBysportidComponent', () => {
  let component: AddLeagueBysportidComponent;
  let fixture: ComponentFixture<AddLeagueBysportidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeagueBysportidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeagueBysportidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
