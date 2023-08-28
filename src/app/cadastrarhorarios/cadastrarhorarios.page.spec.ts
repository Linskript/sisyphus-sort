import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarhorariosPage } from './cadastrarhorarios.page';

describe('CadastrarhorariosPage', () => {
  let component: CadastrarhorariosPage;
  let fixture: ComponentFixture<CadastrarhorariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarhorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
