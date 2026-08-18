import { ComponentFixture, TestBed } from '@angular/core';
import { LeetcodeHomeComponent } from './leetcode-home.component';
import { provideRouter } from '@angular/router';

describe('LeetcodeHomeComponent', () => {
  let component: LeetcodeHomeComponent;
  let fixture: ComponentFixture<LeetcodeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeetcodeHomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LeetcodeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
