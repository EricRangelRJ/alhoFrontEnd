import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresListComponent } from './vendedores-list.component';

describe('VendedoresListComponent', () => {
  let component: VendedoresListComponent;
  let fixture: ComponentFixture<VendedoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedoresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendedoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
