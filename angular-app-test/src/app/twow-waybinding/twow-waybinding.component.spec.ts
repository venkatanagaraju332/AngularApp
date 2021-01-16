import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowWaybindingComponent } from './twow-waybinding.component';

describe('TwowWaybindingComponent', () => {
  let component: TwowWaybindingComponent;
  let fixture: ComponentFixture<TwowWaybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowWaybindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowWaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
