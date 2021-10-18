import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderListUnfinishedComponent } from './purchase-order-list-unfinished.component';

describe('PurchaseOrderListUnfinishedComponent', () => {
  let component: PurchaseOrderListUnfinishedComponent;
  let fixture: ComponentFixture<PurchaseOrderListUnfinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderListUnfinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderListUnfinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
