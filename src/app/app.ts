import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EcommerceWEB';
  constructor(public cartService: CartService) {}
    editQty(index: number, change: number) {
    const item = this.cartService.cartItems[index];
    if (item.quantity + change > 0) {
      item.quantity += change;
    }
  }

  removeItem(index: number) {
    this.cartService.cartItems.splice(index, 1);
  }
}
