import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatDeportivoPage } from './chat-deportivo.page';

describe('ChatDeportivoPage', () => {
  let component: ChatDeportivoPage;
  let fixture: ComponentFixture<ChatDeportivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDeportivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
