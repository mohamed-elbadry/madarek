import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCostsPage } from './service-costs.page';

describe('ServiceCostsPage', () => {
  let component: ServiceCostsPage;
  let fixture: ComponentFixture<ServiceCostsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
