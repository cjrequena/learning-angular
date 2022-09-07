import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _productSet: Set<Product> = null;
  private readonly _productList: Product[] = null;

  private _onClickedEditProduct: Subject<Product> = new Subject<Product>();
  private _onClickedEditProduct$ = this._onClickedEditProduct.asObservable();

  constructor() {
    this._productSet = new Set<Product>([
      {id: "1", name: "Dummy product 1", description: "A dummy product description", price: 369} as Product,
      {id: "2", name: "Dummy product 2", description: "A dummy product description", price: 369} as Product,
      {id: "3", name: "Dummy product 3", description: "A dummy product description", price: 369} as Product,
      {id: "4", name: "Dummy product 4", description: "A dummy product description", price: 369} as Product,
      {id: "5", name: "Dummy product 5", description: "A dummy product description", price: 369} as Product,
      {id: "6", name: "Dummy product 6", description: "A dummy product description", price: 369} as Product
    ]);
    this._productList = Array.from(this._productSet);
  }

  create = (product: Product) => {
    return this._productList.push(product);
  }

  retrieve = (): Product[] => {
    return this._productList;
  }

  retrieveById = (id: string): Product => {
    return this._productList.find((obj) => {
      return obj.id === id;
    });
  }

  update = (id: string, product: Product): boolean => {
    const index = this._productList.findIndex((element) => {
      return element.id === id;
    });
    if (index !== -1) {
      this._productList[index] = product;
      return true;
    } else {
      return false;
    }

  }

  delete = (id: string): boolean => {
    const index = this._productList.findIndex((object) => {
      return object.id === id;
    });
    if (index !== -1) {
      this._productList.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }


  get onClickedEditProduct(): Subject<Product> {
    return this._onClickedEditProduct;
  }

  get onClickedEditProduct$(): Observable<Product> {
    return this._onClickedEditProduct$;
  }

}
