import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders: any[] = [];

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(res => {
      if (res) {
        this.orders = res;
      }
    })
  }

}
