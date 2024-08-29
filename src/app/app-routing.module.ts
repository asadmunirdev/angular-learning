import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'todo', component: TodoAppComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Optional: redirect to a default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
