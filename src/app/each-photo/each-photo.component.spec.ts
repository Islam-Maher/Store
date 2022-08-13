import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachPhotoComponent } from './each-photo.component';

describe('EachPhotoComponent', () => {
  let component: EachPhotoComponent;
  let fixture: ComponentFixture<EachPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
