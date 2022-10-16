import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/core/services/order.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private toastr: ToastrService,
    private orderService: OrderService, private router: Router) { }

  products: any[] = [];
  orders = new Set();
  fetchingProducts: boolean = false;

  ngOnInit(): void {
    this.products = [];
    this.getOrders();
    this.getProducts();
  }

  isOrdered(prod: any) {
    return this.orders.has(prod);
  }

  getOrders() {
    this.orderService.getOrders().subscribe((res: any) => {
      if (res) {
        for (let i=0; i < res.length; i++) {
          if (res[i].product) {
            this.orders.add(res[i].product._id);
          }
        }
      }
    })
  }

  getProducts() {
    this.fetchingProducts = true;
    this.productService.getProducts().subscribe(res => {
      this.fetchingProducts = false;
      this.products = res;
    }, err => {
      this.toastr.error(err.error, "Error");
      this.fetchingProducts = false;
    })
  }

  order(prodId: any) {
    const payload = {
      email: localStorage.getItem("email"),
      prodId: prodId
    };
    this.orderService.order(payload).subscribe(res => {
      this.toastr.success("Ordered Successfully!!", "Success");
      this.router.navigate(['/orders']);
    }, err => {
      this.toastr.error(err.error, "Error");
    })
  }

}
