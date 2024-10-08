import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { ContactComponent } from './contact/contact.component';
import { ApiPostComponent } from './api-post/api-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optional: redirect to a default route
  { path: 'header', component: HeaderComponent },
  { path: 'todo', component: TodoAppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'data', component: ApiDataComponent },
  { path: 'insert-data', component: ApiPostComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
