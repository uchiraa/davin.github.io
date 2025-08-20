import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems: { image: string; name: string; price: number; size: string; quantity: number }[] = [];

  addToCart(item: { image: string; name: string; price: number; size: string; quantity: number }) {
    this.cartItems.push(item);
  }

  getCart() {
    return this.cartItems;
  }
}
