import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLeagueByIdComponent } from './get-league-by-id.component';

describe('GetLeagueByIdComponent', () => {
  let component: GetLeagueByIdComponent;
  let fixture: ComponentFixture<GetLeagueByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLeagueByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLeagueByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
