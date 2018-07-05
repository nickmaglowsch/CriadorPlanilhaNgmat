import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlanilhasComponent } from './view-planilhas.component';

describe('ViewPlanilhasComponent', () => {
  let component: ViewPlanilhasComponent;
  let fixture: ComponentFixture<ViewPlanilhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlanilhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlanilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
