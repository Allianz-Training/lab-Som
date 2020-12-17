import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4componentComponent } from './lab4component.component';

describe('Lab4componentComponent', () => {
  let component: Lab4componentComponent;
  let fixture: ComponentFixture<Lab4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab4componentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
