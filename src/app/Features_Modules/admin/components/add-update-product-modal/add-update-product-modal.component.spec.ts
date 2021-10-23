import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateProductModalComponent } from './add-update-product-modal.component';

describe('AddUpdateProductModalComponent', () => {
  let component: AddUpdateProductModalComponent;
  let fixture: ComponentFixture<AddUpdateProductModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateProductModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
