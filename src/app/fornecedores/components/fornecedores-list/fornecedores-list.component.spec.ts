import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresListComponent } from './fornecedores-list.component';

describe('FornecedoresListComponent', () => {
  let component: FornecedoresListComponent;
  let fixture: ComponentFixture<FornecedoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
