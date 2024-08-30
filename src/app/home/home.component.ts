import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  features = [
    { title: 'Feature 1', description: 'Description of feature 1.' },
    { title: 'Feature 2', description: 'Description of feature 2.' },
    { title: 'Feature 3', description: 'Description of feature 3.' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }
}
