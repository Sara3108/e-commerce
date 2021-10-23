import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/Core/httpServices/products.service';
import { ProductModel } from 'src/app/Core/models/product.model';
import { AppModalService } from 'src/app/Core/services/app-modal.service';

@Component({
  selector: 'app-add-update-product-modal',
  templateUrl: './add-update-product-modal.component.html',
  styleUrls: ['./add-update-product-modal.component.scss']
})
export class AddUpdateProductModalComponent implements OnInit {

  @Input() isAdding: boolean;
  @Input() product: ProductModel;
  @Input() categories: string[];
  @Output() emitAddOrUpdate = new EventEmitter<ProductModel>();

  productForm: FormGroup;
  constructor(private appModalService: AppModalService) { 
    }

  ngOnInit(): void {
    this.createForm();
  }

  closeModal(): void {
    this.appModalService.closeModal();
  }

  createForm(): void {
    this.productForm = new FormGroup({
      title: new FormControl(this.product ? this.product.title : '', [Validators.required]),
      category: new FormControl(this.product ? this.product.category : '', [Validators.required]),
      price: new FormControl(this.product ? this.product.price : '' , [Validators.required]),
      description: new FormControl(this.product ? this.product.description : ''),
    });
  }

  returnControl(controlName: string): string {
    return this.productForm.get(controlName).value;
  }

  submitForm(): void {
    if(this.isAdding) {
      this.emitAddOrUpdate.emit(this.productForm.value);
    } else {
      this.product.title = this.returnControl('title');
      this.product.description = this.returnControl('description');
      this.product.category = this.returnControl('category');
      this.product.price = +this.returnControl('price');
      this.emitAddOrUpdate.emit(this.product);
    }
  }

}
