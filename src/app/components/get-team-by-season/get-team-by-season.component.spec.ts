import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTeamBySeasonComponent } from './get-team-by-season.component';

describe('GetTeamBySeasonComponent', () => {
  let component: GetTeamBySeasonComponent;
  let fixture: ComponentFixture<GetTeamBySeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTeamBySeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTeamBySeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
