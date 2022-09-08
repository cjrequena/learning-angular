import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {HttpProductService} from "../../service/http-product.service";
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
    //private productService: ProductService,
    private httpProductService: HttpProductService
  ) {
  }

  ngOnInit(): void {
    //this.productList = this.productService.retrieve();

    // Using http service
    this.httpProductServiceSubscription = this.httpProductService.retrieve().subscribe(
      (productList) => {
        this.productList = productList;
      }
    );
  }

  ngOnDestroy(): void {
    this.httpProductServiceSubscription.unsubscribe();
  }

  onDeleteProduct = (id: string) => {
    //this.productService.delete(id);

    //Using http service
    this.httpProductService.delete(id);
  }

  onEditProduct = (id: string) => {
    //const product = this.productService.retrieveById(id);
    //this.productService.onClickedEditProduct.next(product);

    // Using http service
    this.httpProductServiceSubscription = this.httpProductService.retrieveById(id).subscribe(
      (product) => {
        this.httpProductService.onClickedEditProduct.next(product);
      }
    );
  }

  onFetch() {
    this.httpProductServiceSubscription = this.httpProductService.retrieve().subscribe(
      (productList) => {
        this.productList = productList;
      }
    );
  }

}
