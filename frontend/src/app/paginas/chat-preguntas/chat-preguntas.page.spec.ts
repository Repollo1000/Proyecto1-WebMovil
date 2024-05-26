import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatPreguntasPage } from './chat-preguntas.page';

describe('ChatPreguntasPage', () => {
  let component: ChatPreguntasPage;
  let fixture: ComponentFixture<ChatPreguntasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPreguntasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
