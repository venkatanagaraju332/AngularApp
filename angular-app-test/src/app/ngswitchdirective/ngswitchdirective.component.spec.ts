import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchdirectiveComponent } from './ngswitchdirective.component';

describe('NgswitchdirectiveComponent', () => {
  let component: NgswitchdirectiveComponent;
  let fixture: ComponentFixture<NgswitchdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchdirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
