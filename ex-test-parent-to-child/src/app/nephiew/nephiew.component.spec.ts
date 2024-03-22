import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NephiewComponent } from './nephiew.component';

describe('NephiewComponent', () => {
  let component: NephiewComponent;
  let fixture: ComponentFixture<NephiewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NephiewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NephiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
