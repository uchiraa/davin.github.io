import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
images: string[] = [
    'assets/img/Refrigerator1.png',
    'assets/img/Refrigerator2.png',
    'assets/img/Refrigerator3.jpg'
  ];
  currentImage: string = this.images[0];
}
