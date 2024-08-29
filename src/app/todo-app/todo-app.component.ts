import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {
  title = 'Todo App';
  taskName: string = ''; 
  list: any[] = [];

  addTask(item: string) {
    if (item.trim()) {
      this.list.push({ id: this.list.length, name: item });
      console.warn(this.list);
      this.taskName = ''; 
    }
  }

  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter((item) => item.id !== id);
  }
}
