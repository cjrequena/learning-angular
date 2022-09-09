import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {HttpProductService} from "../../service/http-product.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public productList$:Observable<Product[]>;
  private httpProductServiceSubscription: Subscription;

  constructor(
    public httpProductService: HttpProductService
  ) {
  }

  ngOnInit(): void {
    this.productList$ = this.httpProductService.retrieve();
  }

  ngOnDestroy(): void {
    this.httpProductServiceSubscription.unsubscribe();
  }

  onDeleteProduct = (id: string) => {
    this.httpProductServiceSubscription = this.httpProductService.delete(id).subscribe();
    setTimeout(() => {this.httpProductService.retrieve()}, 369);
  }

  onEditProduct = (id: string) => {
    this.httpProductServiceSubscription = this.httpProductService.retrieveById(id).subscribe(
      (product) => {
        this.httpProductService.onClickedEditProduct.next(product);
      }
    );
  }

  onFetch() {
    this.productList$ = this.httpProductService.retrieve();
  }

}
