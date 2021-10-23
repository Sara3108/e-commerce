import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Core/httpServices/products.service';
import { ProductModel } from 'src/app/Core/models/product.model';

@Component({
  selector: 'app-user-products-view',
  templateUrl: './user-products-view.component.html',
  styleUrls: ['./user-products-view.component.scss']
})
export class UserProductsViewComponent implements OnInit {
  allProducts: ProductModel[];
  filteredProducts: ProductModel[];
  isloadingData: boolean;
  categories: string[];
  filterValue: string = 'all';
  isShortTxt: boolean = true;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategories();
  }

  getAllProducts(): void {
    this.isloadingData = true;
    this.productService.getAllProducts().subscribe((res: ProductModel[]) => {
      this.isloadingData = false;
      this.allProducts = this.addSeeMoreProp(res);
      this.filteredProducts = this.allProducts;
    });
  }

  getCategories(): void {
    this.productService.getCategories().subscribe((res: string[]) => {
      this.categories = res;
    })
  }

  addSeeMoreProp(products: ProductModel[]): ProductModel[] {
    return products.map(p => ({ ...p, seeMore: false }));
  }

  toggleSeeMore(product: ProductModel, isMore: boolean): void {
    let index = this.filteredProducts.findIndex(p => p.id === product.id);
    if (index || index === 0) {
      this.filteredProducts[index].seeMore = isMore;
    }
  }

  filterByCategories(e): void {
    this.filteredProducts = this.allProducts.filter(p => p.category === this.filterValue);
  }
}
