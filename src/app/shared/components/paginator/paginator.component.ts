import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() items: any[];
  @Output() emitItems = new EventEmitter();
  pageCount: number = 0;
  totalPagesCount: number = 1;
  funnelsNum: number;
  pageLimit: number = 5;
  displayedItems: any[];
  totalItemsCount: number;
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.items){
      this.getPageItems();
    }
  }

  ngOnInit(): void {
  }

  goToNextPage() {
    this.pageCount++;
    this.getPageItems();
  }

  goToPreviousPage() {
    this.pageCount--;
    this.getPageItems();
  }

  getPageItems() {
    let displayedProducts = [...this.items];
    this.updateItems(displayedProducts.splice(this.pageCount * this.pageLimit, this.pageLimit));
  }

  updateItems(response) {
    this.displayedItems = response;
    this.totalItemsCount = this.items.length;
    this.totalPagesCount = Math.ceil((this.totalItemsCount / this.pageLimit));
    this.emitItems.emit(this.displayedItems);
  }

  getPageByNumber(event) {
    const number = event.target.value;
    if (isNaN(number) || number > this.totalPagesCount || number <= 0) {
      event.target.value = this.pageCount + 1;
    } else {
      this.pageCount = number - 1;
      this.getPageItems();
    }
  }

}
