import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCrudComponent } from './card-crud.component';

describe('CardCrudComponent', () => {
  let component: CardCrudComponent;
  let fixture: ComponentFixture<CardCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
