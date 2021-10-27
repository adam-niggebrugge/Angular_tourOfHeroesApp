import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAdderComponent } from './employee-adder.component';

describe('EmployeeAdderComponent', () => {
  let component: EmployeeAdderComponent;
  let fixture: ComponentFixture<EmployeeAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
