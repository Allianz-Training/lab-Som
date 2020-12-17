import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw3SearchBarComponent } from './hw3-search-bar.component';

describe('Hw3SearchBarComponent', () => {
  let component: Hw3SearchBarComponent;
  let fixture: ComponentFixture<Hw3SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hw3SearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw3SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
