import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarhorariosPage } from './editarhorarios.page';

describe('EditarhorariosPage', () => {
  let component: EditarhorariosPage;
  let fixture: ComponentFixture<EditarhorariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarhorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
