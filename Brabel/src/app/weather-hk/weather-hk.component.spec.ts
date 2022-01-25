import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHkComponent } from './weather-hk.component';

describe('WeatherHkComponent', () => {
  let component: WeatherHkComponent;
  let fixture: ComponentFixture<WeatherHkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
