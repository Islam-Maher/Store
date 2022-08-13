import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedChildComponent } from './purchased-child.component';

describe('PurchasedChildComponent', () => {
  let component: PurchasedChildComponent;
  let fixture: ComponentFixture<PurchasedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
