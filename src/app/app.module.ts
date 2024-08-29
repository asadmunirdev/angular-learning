import { NgModule , LOCALE_ID} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from './user-details/user-details.component';
import { registerLocaleData } from '@angular/common';
import localeEnPk from '@angular/common/locales/en-PK';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterComponent } from './router/router.component';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatButtonModule } from '@angular/material/button'
// import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    HeaderComponent,
    TodoAppComponent,
    ChildComponent,
    HomeComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbAlertModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-PK' }, // Set locale to Pakistani
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEnPk); // Register the locale data
  }
 }
