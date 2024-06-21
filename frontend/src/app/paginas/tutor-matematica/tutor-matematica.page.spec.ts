import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorMatematicaPage } from './tutor-matematica.page';

describe('TutorMatematicaPage', () => {
  let component: TutorMatematicaPage;
  let fixture: ComponentFixture<TutorMatematicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorMatematicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
