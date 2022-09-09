import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Subscription} from "rxjs";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  @ViewChild("_productFormLR", {static: false}) productForm: NgForm;
  editMode: boolean = false;

  private _onClickedEditProductSubscription: Subscription;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this._onClickedEditProductSubscription = this.productService.onClickedEditProduct$.subscribe(
      (product) => {
        this.onEditProduct(product);
      }
    );
  }

  ngOnDestroy(): void {
    this._onClickedEditProductSubscription.unsubscribe();
  }

  saveProduct() {
    let product = new Product();
    product.id = this.productForm.value.id;
    product.name = this.productForm.value.name;
    product.description = this.productForm.value.description;
    product.price = this.productForm.value.price;

    if (this.editMode) {
      this.productService.update(product.id, product);
      this.editMode = false;
    }else{
      this.productService.create(product);
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
