import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHavanaComponent } from './weather-havana.component';

describe('WeatherHavanaComponent', () => {
  let component: WeatherHavanaComponent;
  let fixture: ComponentFixture<WeatherHavanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHavanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHavanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
