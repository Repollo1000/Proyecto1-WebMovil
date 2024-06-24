import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivarRobotPage } from './activar-robot.page';

describe('ActivarRobotPage', () => {
  let component: ActivarRobotPage;
  let fixture: ComponentFixture<ActivarRobotPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarRobotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
