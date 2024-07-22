import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PouplarCityComponent } from './pouplar-city.component';

describe('PouplarCityComponent', () => {
  let component: PouplarCityComponent;
  let fixture: ComponentFixture<PouplarCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PouplarCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PouplarCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
