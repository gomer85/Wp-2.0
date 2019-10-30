import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTeamByIdComponent } from './get-team-by-id.component';

describe('GetTeamByIdComponent', () => {
  let component: GetTeamByIdComponent;
  let fixture: ComponentFixture<GetTeamByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTeamByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTeamByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
