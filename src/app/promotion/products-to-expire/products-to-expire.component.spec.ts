import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsToExpireComponent } from './products-to-expire.component';

describe('ProductsToExpireComponent', () => {
  let component: ProductsToExpireComponent;
  let fixture: ComponentFixture<ProductsToExpireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsToExpireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsToExpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
