import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InforobotPage } from './inforobot.page';

describe('InforobotPage', () => {
  let component: InforobotPage;
  let fixture: ComponentFixture<InforobotPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InforobotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
