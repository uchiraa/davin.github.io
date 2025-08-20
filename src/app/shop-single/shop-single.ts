import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop-single',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shop-single.html',
  styleUrls: ['./shop-single.css'],
})
export class ShopSingle {
  products = [
    {
      id: 1,
      name: 'Activator',
      price: 999,
      images: [
        'assets/img/Refrigerator1.png',
        'assets/img/Refrigerator2.png',
        'assets/img/Refrigerator3.jpg',
      ],
      code: 'sc105',
      brand: 'Auto Cool',
      sizeInfo: 'W470*D535*H812mm',
      color: 'black',
      description: ['85L', 'ទំរង់ផលិតផល​ 30.5kg', 'ហ្គាស 600A'],
    },
    {
      id: 2,
      name: 'ATW127',
      price: 899,
      images: [
        'assets/img/RefrigeratorBlack.png',
        'assets/img/RefrigeratorBlack2.png',
      ],
      code: 'atw127',
      brand: 'Activator',
      sizeInfo: 'W500*D550*H850mm',
      color: 'silver',
      description: [
        'Rated Voltage:220-240V AC',
        'Current 1.0A',
        'Power Consumption:130W',
        'Rated Frequency: 50 Hz',
      ],
    },
  ];

  currentProduct = this.products[0];
  currentImage = this.products[0].images[0];

  selectedSize = 'S';
  quantity = 1;

  constructor(public cartService: CartService) {}

  changeImage(img: string) {
    this.currentImage = img;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    this.cartService.addToCart({
      image: this.currentImage,
      name: this.currentProduct.name,
      price: this.currentProduct.price,
      size: this.selectedSize,
      quantity: this.quantity,
    });
  }

  scrollThumbnails(direction: 'prev' | 'next') {
    const container = document.getElementById('thumbnail-container');
    if (!container) return;

    const scrollAmount = 150;
    container.scrollLeft += direction === 'next' ? scrollAmount : -scrollAmount;
  }

  viewProduct(product: any) {
    this.currentProduct = product;
    this.currentImage = product.images[0];
    this.selectedSize = 'S';
    this.quantity = 1;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
