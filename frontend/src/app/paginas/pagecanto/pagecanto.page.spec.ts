import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagecantoPage } from './pagecanto.page';

describe('PagecantoPage', () => {
  let component: PagecantoPage;
  let fixture: ComponentFixture<PagecantoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecantoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
