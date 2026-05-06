import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderPaymentPage } from './order-payment.page';

describe('OrderPaymentPage', () => {
  let component: OrderPaymentPage;
  let fixture: ComponentFixture<OrderPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
