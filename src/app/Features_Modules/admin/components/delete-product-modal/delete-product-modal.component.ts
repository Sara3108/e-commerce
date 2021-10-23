import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/Core/models/product.model';
import { AppModalService } from 'src/app/Core/services/app-modal.service';

@Component({
  selector: 'app-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.scss']
})
export class DeleteProductModalComponent implements OnInit {
  @Output() deleteEmit = new EventEmitter();
  @Input() product: ProductModel;
  constructor(private appModalService: AppModalService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.appModalService.closeModal();
  }

  confirm(): void {
    this.deleteEmit.emit(this.product.id);
  }

}
