import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraGateComponent } from './camera-gate.component';

describe('CameraGateComponent', () => {
  let component: CameraGateComponent;
  let fixture: ComponentFixture<CameraGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraGateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
