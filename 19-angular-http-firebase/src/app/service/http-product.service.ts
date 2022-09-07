import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {Observable, Subject, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {


  private _onClickedEditProduct: Subject<Product> = new Subject<Product>();
  private _onClickedEditProduct$ = this._onClickedEditProduct.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  create = (product: Product) => {
    product.id = null;
    const headers = new HttpHeaders({"custom-header": "header-1"});
    const observer = {
      next: (response) => console.log('Observer got a next value: ' + response.name),
      error: (error) => console.error('Observer got an error: ' + error),
      complete: () => console.log('Observer got a complete notification'),
    };
    let observable = this.httpClient.post<{ name: string }>(
      "https://learning-angular-6d212-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      product, {headers: headers});
    observable.subscribe(observer);

    // let observable = this.httpClient.post<{ name: string }>(
    //   "https://learning-angular-6d212-default-rtdb.europe-west1.firebasedatabase.app/products.json",
    //   product, {headers: headers});
    // observable.subscribe(
    //   (response)=>{console.log(response)}
    // );
  }

  retrieve = (): Product[] => {
    return Array.from([]);

  }

  retrieveById = (id: string): Product => {
    return null;
  }

  update = (id: string, product: Product): boolean => {
    return null;
  }

  delete = (id: string): boolean => {
    return null;
  }


  get onClickedEditProduct(): Subject<Product> {
    return this._onClickedEditProduct;
  }

  get onClickedEditProduct$(): Observable<Product> {
    return this._onClickedEditProduct$;
  }

}
