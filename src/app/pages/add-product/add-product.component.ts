import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  formData = {
    title: '',
    description: '',
    price: '',
    image: null
  };

  @ViewChild('myForm') myForm!: NgForm;

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService
  ) { }

  submitForm(): void {
    const formData = new FormData();
    formData.append('title', this.formData.title);
    formData.append('description', this.formData.description);
    formData.append('price', this.formData.price);

    if (this.formData.image) {
      formData.append('image', this.formData.image);
    }

    this.http.post('http://localhost:3000/upload', formData, { responseType: 'text' }).subscribe(
      response => {
        console.log('Upload success:', response);
        this.notification.create(
          'success',
          'Успішна операція',
          'Товар був успішно доданий до бази даних'
        )
          .onClick.subscribe(() => {
            console.log('notification clicked!');
          });

        // Скидання стану форми
        this.myForm.resetForm();

      },
      error => {
        console.error('Upload error:', error);
        this.notification.create(
          'error',
          'Виникла помилка',
          'Товар не додано до бази даних'
        )
          .onClick.subscribe(() => {
            console.log('notification clicked!');
          });
      }
    );
  }

  imageSelected = false;

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.formData.image = file;
    this.imageSelected = file !== undefined && file !== null;
  }

}
