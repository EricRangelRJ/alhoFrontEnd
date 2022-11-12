import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCadComponent } from './produtos-cad.component';

describe('ProdutosCadComponent', () => {
  let component: ProdutosCadComponent;
  let fixture: ComponentFixture<ProdutosCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
