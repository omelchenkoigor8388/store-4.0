import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrls: SafeResourceUrl[] = [];
  array: number[];

  constructor(private sanitizer: DomSanitizer) {
    this.array = [0, 1, 2, 3]; // Масив ізображень або URL-адреси зображень
    this.loadImages();
  }

  private loadImages() {
    for (const index of this.array) {
      const imageUrl = `http://localhost:3000/images/${index}`; // Замініть шлях і формат на ваші зображення
      const safeImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      this.imageUrls.push(safeImageUrl);
    }
  }
}
