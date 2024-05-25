import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsesorDeportivoPage } from './asesor-deportivo.page';

describe('AsesorDeportivoPage', () => {
  let component: AsesorDeportivoPage;
  let fixture: ComponentFixture<AsesorDeportivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorDeportivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
