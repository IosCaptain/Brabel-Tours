import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavanaComponent } from './havana.component';

describe('HavanaComponent', () => {
  let component: HavanaComponent;
  let fixture: ComponentFixture<HavanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
