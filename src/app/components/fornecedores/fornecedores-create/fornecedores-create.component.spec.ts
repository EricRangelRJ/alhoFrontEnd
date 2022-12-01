import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresCreateComponent } from './fornecedores-create.component';

describe('FornecedoresCreateComponent', () => {
  let component: FornecedoresCreateComponent;
  let fixture: ComponentFixture<FornecedoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
