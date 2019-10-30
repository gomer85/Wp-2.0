import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLeagueBysportidComponent } from './get-league-bysportid.component';

describe('GetLeagueBysportidComponent', () => {
  let component: GetLeagueBysportidComponent;
  let fixture: ComponentFixture<GetLeagueBysportidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLeagueBysportidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLeagueBysportidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
