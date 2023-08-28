import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeushorariosPage } from './meushorarios.page';

describe('MeushorariosPage', () => {
  let component: MeushorariosPage;
  let fixture: ComponentFixture<MeushorariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeushorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
