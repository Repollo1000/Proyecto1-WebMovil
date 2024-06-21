import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResolverPage } from './resolver.page';

describe('ResolverPage', () => {
  let component: ResolverPage;
  let fixture: ComponentFixture<ResolverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
