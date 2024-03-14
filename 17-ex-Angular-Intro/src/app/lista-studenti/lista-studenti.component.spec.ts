import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaStudentiComponent } from './lista-studenti.component';

describe('ListaStudentiComponent', () => {
  let component: ListaStudentiComponent;
  let fixture: ComponentFixture<ListaStudentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaStudentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaStudentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
