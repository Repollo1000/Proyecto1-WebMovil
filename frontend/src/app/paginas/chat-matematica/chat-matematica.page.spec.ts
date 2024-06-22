import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatMatematicaPage } from './chat-matematica.page';

describe('ChatMatematicaPage', () => {
  let component: ChatMatematicaPage;
  let fixture: ComponentFixture<ChatMatematicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMatematicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
