import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {map, Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

const baseUrl = "https://learning-angular-6d212-default-rtdb.europe-west1.firebasedatabase.app/products";

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {

  private _onClickedEditProduct: Subject<Product> = new Subject<Product>();
  private _onClickedEditProduct$ = this._onClickedEditProduct.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  create = (product: Product): Observable<any> => {
    product.id = null;
    const headers = new HttpHeaders({"custom-header": "header-1"});
    return this.httpClient.post<{ name: string }>(`${baseUrl}/.json`, product, {headers: headers});
  }

  retrieve = (): Observable<Product[]> => {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    const params = new HttpParams()
      .set('print', 'pretty').set('pageNum', 1);

    let observable = this.httpClient.get<{ [key: string]: Product }>(`${baseUrl}.json`, {
      "headers": headers,
      "params": params
    })

    return observable.pipe(
      map((response) => {
        const products = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            products.push({...response[key], id: key});
          }
        }
        return products;
      })
    );
  }

  retrieveById = (id: string): Observable<Product> => {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    let observable = this.httpClient.get<any>(`${baseUrl}/${id}/.json`, {"headers": headers});

    return observable.pipe(
      map((response) => {
        response.id = id;
        return response;
      })
    )
  }

  update = (id: string, product: Product): Observable<any> => {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    return this.httpClient.put(`${baseUrl}/${id}/.json`, product, {"headers": headers})
  }

  delete = (id: string): Observable<any> => {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    return this.httpClient.delete(`${baseUrl}/${id}/.json`, {"headers": headers});
  }


  get onClickedEditProduct(): Subject<Product> {
    return this._onClickedEditProduct;
  }

  get onClickedEditProduct$(): Observable<Product> {
    return this._onClickedEditProduct$;
  }

}
