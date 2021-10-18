import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPromotionsComponent } from './past-promotions.component';

describe('PastPromotionsComponent', () => {
  let component: PastPromotionsComponent;
  let fixture: ComponentFixture<PastPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastPromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
