import { Component, OnInit } from '@angular/core'; // Make sure OnInit is imported
import { UserDataService, UserData } from '../services/user-data.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'] // Corrected from styleUrl to styleUrls
})
export class ApiDataComponent implements OnInit {
  title = 'APIs';
  users: UserData[] = [];

  constructor(private userData: UserDataService) {}

  ngOnInit() {
    this.userData.users().subscribe((data) => {
      console.warn("data", data);
      this.users = data;
    });
  }

  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
