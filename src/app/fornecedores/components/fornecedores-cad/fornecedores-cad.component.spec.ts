import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresCadComponent } from './fornecedores-cad.component';

describe('FornecedoresCadComponent', () => {
  let component: FornecedoresCadComponent;
  let fixture: ComponentFixture<FornecedoresCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedoresCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
