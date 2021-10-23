import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../../Core/httpServices/products.service';
import { ProductModel } from '../../../../Core/models/product.model';
import { AppModalService } from '../../../../Core/services/app-modal.service';

@Component({
  selector: 'app-admin-products-view',
  templateUrl: './admin-products-view.component.html',
  styleUrls: ['./admin-products-view.component.scss']
})
export class AdminProductsViewComponent implements OnInit {
  allProducts: ProductModel[];
  subscription: Subscription[] = [];
  isloadingData: boolean;
  products: ProductModel[];
  updatingProduct: ProductModel;
  deletedProduct: ProductModel;
  isAdding: boolean;
  categories: string[];
  constructor(private productService: ProductsService,
    private appModalService: AppModalService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategories();
  }

  getAllProducts(): void {
    this.isloadingData = true;
    this.productService.getAllProducts().subscribe((res: ProductModel[]) => {
      this.isloadingData = false;
      this.allProducts = res;
    }, (error: HttpErrorResponse) => {

    });
  }

  getCategories(): void{
    this.productService.getCategories().subscribe((res: string[]) => {
      this.categories = res;
    })
  }

  pagingChanged(items): void{
    this.products = items;
  }

  handleOpenModal(template: TemplateRef<any>, product?: ProductModel): void{
    if(product){
      this.updatingProduct = product;
      this.isAdding = false;
    } else {
      this.updatingProduct = null;
      this.isAdding = true;
    }
    this.openModal(template);
  }

  openModal(template: TemplateRef<any>): void{
    this.appModalService.openModal(template);
  }

  handleDelete(template, product): void {
    this.deletedProduct = product;
    this.openModal(template);
  }

  deleteProduct(productId): void {
    this.productService.deleteProduct(productId).subscribe(res => {
      this.appModalService.closeModal();
      this.getAllProducts();
    })
  }

  emitAddOrUpdateProduct(product: ProductModel): void{
    if(this.isAdding){
      this.productService.addProduct(product).subscribe(res => {
        this.appModalService.closeModal();
        this.getAllProducts();
      })
    } else {
      this.productService.updateProduct(product).subscribe(res => {
        this.appModalService.closeModal();
        this.getAllProducts();
      })
    }

  }

}
