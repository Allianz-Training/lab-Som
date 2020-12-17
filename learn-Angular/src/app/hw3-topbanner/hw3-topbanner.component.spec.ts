import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw3TopbannerComponent } from './hw3-topbanner.component';

describe('Hw3TopbannerComponent', () => {
  let component: Hw3TopbannerComponent;
  let fixture: ComponentFixture<Hw3TopbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hw3TopbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw3TopbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
