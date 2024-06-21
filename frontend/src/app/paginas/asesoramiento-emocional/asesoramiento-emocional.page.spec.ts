import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsesoramientoEmocionalPage } from './asesoramiento-emocional.page';

describe('AsesoramientoEmocionalPage', () => {
  let component: AsesoramientoEmocionalPage;
  let fixture: ComponentFixture<AsesoramientoEmocionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoramientoEmocionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
