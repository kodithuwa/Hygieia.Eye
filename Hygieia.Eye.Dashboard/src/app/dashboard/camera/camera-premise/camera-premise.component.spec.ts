import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraPremiseComponent } from './camera-premise.component';

describe('CameraPremiseComponent', () => {
  let component: CameraPremiseComponent;
  let fixture: ComponentFixture<CameraPremiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraPremiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPremiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
