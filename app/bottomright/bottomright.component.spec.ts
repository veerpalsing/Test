import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomrightComponent } from './bottomright.component';

describe('BottomrightComponent', () => {
  let component: BottomrightComponent;
  let fixture: ComponentFixture<BottomrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
