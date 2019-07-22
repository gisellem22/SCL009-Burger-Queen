import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiterComponent } from './witer.component';

describe('WiterComponent', () => {
  let component: WiterComponent;
  let fixture: ComponentFixture<WiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
