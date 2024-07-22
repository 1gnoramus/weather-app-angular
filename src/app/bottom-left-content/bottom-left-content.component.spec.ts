import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLeftContentComponent } from './bottom-left-content.component';

describe('BottomLeftContentComponent', () => {
  let component: BottomLeftContentComponent;
  let fixture: ComponentFixture<BottomLeftContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomLeftContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomLeftContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
