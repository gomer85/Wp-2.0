import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSportsComponent } from './get-all-sports.component';

describe('GetAllSportsComponent', () => {
  let component: GetAllSportsComponent;
  let fixture: ComponentFixture<GetAllSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
