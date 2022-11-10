import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCadComponent } from './usuarios-cad.component';

describe('UsuariosCadComponent', () => {
  let component: UsuariosCadComponent;
  let fixture: ComponentFixture<UsuariosCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
