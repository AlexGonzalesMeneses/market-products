import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderListCompletedComponent } from './purchase-order-list-completed.component';

describe('PurchaseOrderListCompletedComponent', () => {
  let component: PurchaseOrderListCompletedComponent;
  let fixture: ComponentFixture<PurchaseOrderListCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderListCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderListCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
