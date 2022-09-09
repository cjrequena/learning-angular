import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Product} from "../../model/product";
import {HttpProductService} from "../../service/http-product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  @ViewChild("_productFormLR", {static: false}) productForm: NgForm;
  editMode: boolean = false;

  private _onClickedEditProductSubscription: Subscription;
  private _httpProductServiceSubscription: Subscription;


  constructor(
    private httpProductService: HttpProductService
  ) {}

  ngOnInit(): void {
    this._onClickedEditProductSubscription = this.httpProductService.onClickedEditProduct$.subscribe(
      (product) => {
        this.onEditProduct(product);
      }
    );
  }

  ngOnDestroy(): void {
    this._onClickedEditProductSubscription.unsubscribe();
    this._httpProductServiceSubscription.unsubscribe();
  }

  saveProduct() {
    let product = new Product();
    product.id = this.productForm.value.id;
    product.name = this.productForm.value.name;
    product.description = this.productForm.value.description;
    product.price = this.productForm.value.price;

    if (this.editMode) {
      this._httpProductServiceSubscription = this.httpProductService.update(product.id, product).subscribe();
      this.editMode = false;
    }else{
      this._httpProductServiceSubscription = this.httpProductService.create(product).subscribe();
    }
    this.productForm.resetForm();
  }

  onEditProduct = (product: Product) => {
    this.editMode = true;
    //this.productForm.setValue(product)
    this.productForm.setValue({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price
    })
  }

}
