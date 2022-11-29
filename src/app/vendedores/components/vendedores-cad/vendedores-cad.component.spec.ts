import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresCadComponent } from './vendedores-cad.component';

describe('VendedoresCadComponent', () => {
  let component: VendedoresCadComponent;
  let fixture: ComponentFixture<VendedoresCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedoresCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendedoresCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
