import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTrendingComponent } from './market-trending.component';

describe('MarketTrendingComponent', () => {
  let component: MarketTrendingComponent;
  let fixture: ComponentFixture<MarketTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
