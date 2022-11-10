import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCadComponent } from './pedidos-cad.component';

describe('PedidosCadComponent', () => {
  let component: PedidosCadComponent;
  let fixture: ComponentFixture<PedidosCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
