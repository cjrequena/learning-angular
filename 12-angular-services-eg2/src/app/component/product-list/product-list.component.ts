import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public productList: Product[];
  httpProductServiceSubscription: Subscription;

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productList = this.productService.retrieve();
  }

  ngOnDestroy(): void {
    this.httpProductServiceSubscription.unsubscribe();
  }

  onDeleteProduct = (id: string) => {
    this.productService.delete(id);
  }

  onEditProduct = (id: string) => {
    const product = this.productService.retrieveById(id);
    this.productService.onClickedEditProduct.next(product);
  }

}
