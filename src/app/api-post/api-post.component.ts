import { Component } from '@angular/core';
import { UserDataService, UserData } from '../services/user-data.service';

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.css']
})
export class ApiPostComponent {
  newProductData: { key: string; value: any }[] = [];

  constructor(private userData: UserDataService) {}

  addDataField() {
    this.newProductData.push({ key: '', value: '' });
  }

  removeDataField(index: number) {
    this.newProductData.splice(index, 1);
  }

  getUserFormData(data: any) {
    const formattedData: UserData = {
      id: '', // Server will typically assign the ID
      name: data.name,
      data: {} // Initialize data as an empty object
    };

    // Convert the key-value pairs to an object
    this.newProductData.forEach((entry) => {
      if (formattedData.data) { // Check to ensure data is not null
        formattedData.data[entry.key] = entry.value;
      }
    });

    this.userData.saveUsers(formattedData).subscribe(
      (result) => {
        if (result) {
          console.warn('Product data saved successfully:', result);
          // Show success message or perform further actions
        } else {
          console.error('Failed to save product data');
        }
      },
      (error) => {
        console.error('Error saving product data:', error);
      }
    );
  }
}
