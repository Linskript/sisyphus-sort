import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcluirhorariosPage } from './excluirhorarios.page';

describe('ExcluirhorariosPage', () => {
  let component: ExcluirhorariosPage;
  let fixture: ComponentFixture<ExcluirhorariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExcluirhorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
