import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AQuaComponent } from './a-qua.component';

describe('AQuaComponent', () => {
  let component: AQuaComponent;
  let fixture: ComponentFixture<AQuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AQuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AQuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
