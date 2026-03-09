import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMeComponent } from './for-me.component';

describe('ForMeComponent', () => {
  let component: ForMeComponent;
  let fixture: ComponentFixture<ForMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForMeComponent]
    });
    fixture = TestBed.createComponent(ForMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
