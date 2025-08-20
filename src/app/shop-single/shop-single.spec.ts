import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSingle } from './shop-single';

describe('ShopSingle', () => {
  let component: ShopSingle;
  let fixture: ComponentFixture<ShopSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSingle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
