import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainningPage } from './trainning.page';

describe('TrainningPage', () => {
  let component: TrainningPage;
  let fixture: ComponentFixture<TrainningPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
