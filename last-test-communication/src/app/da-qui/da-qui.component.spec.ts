import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaQuiComponent } from './da-qui.component';

describe('DaQuiComponent', () => {
  let component: DaQuiComponent;
  let fixture: ComponentFixture<DaQuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaQuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaQuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
