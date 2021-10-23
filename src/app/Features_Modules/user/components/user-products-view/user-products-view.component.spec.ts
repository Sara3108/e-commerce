import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsViewComponent } from './user-products-view.component';

describe('UserProductsViewComponent', () => {
  let component: UserProductsViewComponent;
  let fixture: ComponentFixture<UserProductsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProductsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
