import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassfoRumComponent } from './classfo-rum.component';

describe('ClassfoRumComponent', () => {
  let component: ClassfoRumComponent;
  let fixture: ComponentFixture<ClassfoRumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassfoRumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassfoRumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
