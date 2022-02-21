import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateSyntaxPracticeComponent } from './tempate-syntax-practice.component';

describe('TempateSyntaxPracticeComponent', () => {
  let component: TempateSyntaxPracticeComponent;
  let fixture: ComponentFixture<TempateSyntaxPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempateSyntaxPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateSyntaxPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
