import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCadComponent } from './clientes-cad.component';

describe('ClientesCadComponent', () => {
  let component: ClientesCadComponent;
  let fixture: ComponentFixture<ClientesCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
