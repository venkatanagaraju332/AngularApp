import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfordirectiveComponent } from './ngfordirective.component';

describe('NgfordirectiveComponent', () => {
  let component: NgfordirectiveComponent;
  let fixture: ComponentFixture<NgfordirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfordirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfordirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
