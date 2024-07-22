import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRightContentComponent } from './bottom-right-content.component';

describe('BottomRightContentComponent', () => {
  let component: BottomRightContentComponent;
  let fixture: ComponentFixture<BottomRightContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomRightContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomRightContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
