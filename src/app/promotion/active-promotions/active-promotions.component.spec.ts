import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePromotionsComponent } from './active-promotions.component';

describe('ActivePromotionsComponent', () => {
  let component: ActivePromotionsComponent;
  let fixture: ComponentFixture<ActivePromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
