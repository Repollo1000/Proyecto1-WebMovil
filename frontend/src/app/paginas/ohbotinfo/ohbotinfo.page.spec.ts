import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OhbotinfoPage } from './ohbotinfo.page';

describe('OhbotinfoPage', () => {
  let component: OhbotinfoPage;
  let fixture: ComponentFixture<OhbotinfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OhbotinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});