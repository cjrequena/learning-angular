import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {HttpProductService} from "../../service/http-product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: Product[];

  constructor(
    private productService: ProductService,
    private httpProductService: HttpProductService
  ) {}

  ngOnInit(): void {
    //this.productList = this.productService.retrieve();
    this.productList = this.httpProductService.retrieve();
  }

  onDeleteProduct = (id: string): boolean => {
    return this.productService.delete(id);
  }

  onEditProduct = (id: string) => {
    const product = this.productService.retrieveById(id);
    this.productService.onClickedEditProduct.next(product);
  }

  onFetch(){
    this.productList = this.productService.retrieve();
    console.log(this.productList)
  }

}
