import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPractiveComponent } from './extra-practive.component';

describe('ExtraPractiveComponent', () => {
  let component: ExtraPractiveComponent;
  let fixture: ComponentFixture<ExtraPractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraPractiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraPractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
