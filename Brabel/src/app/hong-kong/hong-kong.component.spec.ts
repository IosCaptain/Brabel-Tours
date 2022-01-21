import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HongKongComponent } from './hong-kong.component';

describe('HongKongComponent', () => {
  let component: HongKongComponent;
  let fixture: ComponentFixture<HongKongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HongKongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HongKongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
