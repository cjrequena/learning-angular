import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    new Product(1, 'Minimalists Analog Watch', '109', 'Black', 'Available', '/assets/products/product-image-1.jpeg'),
    new Product(2, 'Hisense Ultra HD Smart TV', '3339', 'Black', 'Available', '/assets/products/product-image-2.jpeg'),
    new Product(3,'APPLE iPhone 12','1855','Black','Not Available','/assets/products/product-image-3.jpeg'),
    new Product(4,'LG Fully Automatic Washing Machine','1765','White','Available','/assets/products/product-image-4.jpeg'),
    new Product(5, 'LG Refrigerator with Door Cooling','2815', 'White', 'Not Available','/assets/products/product-image-5.jpeg'),
    new Product(6, 'DELL Inspiron One 27 Ryzen 7', '2145', 'White', 'Available', '/assets/products/product-image-6.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
