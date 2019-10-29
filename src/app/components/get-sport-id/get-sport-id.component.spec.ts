import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSportIdComponent } from './get-sport-id.component';

describe('GetSportIdComponent', () => {
  let component: GetSportIdComponent;
  let fixture: ComponentFixture<GetSportIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSportIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSportIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
