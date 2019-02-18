import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiTableComponent } from './emi-table.component';

describe('EmiTableComponent', () => {
  let component: EmiTableComponent;
  let fixture: ComponentFixture<EmiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
