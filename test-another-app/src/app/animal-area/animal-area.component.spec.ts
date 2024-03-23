import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAreaComponent } from './animal-area.component';

describe('AnimalAreaComponent', () => {
  let component: AnimalAreaComponent;
  let fixture: ComponentFixture<AnimalAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
