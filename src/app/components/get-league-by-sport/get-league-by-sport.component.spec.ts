import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLeagueBySportComponent } from './get-league-by-sport.component';

describe('GetLeagueBySportComponent', () => {
  let component: GetLeagueBySportComponent;
  let fixture: ComponentFixture<GetLeagueBySportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLeagueBySportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLeagueBySportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
