import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTeamBySportComponent } from './get-team-by-sport.component';

describe('GetTeamBySportComponent', () => {
  let component: GetTeamBySportComponent;
  let fixture: ComponentFixture<GetTeamBySportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTeamBySportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTeamBySportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
