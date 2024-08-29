## Angular setup:

npm install -g @angular/cli

## project:

ng new project-name
cd project-name
code . to enter visul stuido

ng serve to run

## Interpolation:

{{}} dynamic data

## Angular CLI commands:

ng help
ng generate component component-name
ng generate module module-name
ng built

## Component:

buildibg block
selector
inline style & inline template

## Function:

[_html_]: <button (click)="getName('asad')">Click Me</button>
ts:getName(name:string){
alert(name);
};

## Events:

get input box value:
[_html_]: <input
type="text"
#box
placeholder="Enter Name"
name="name"
/>
<button (click)="getValue(box.value)">Click</button>
<br><br>

<p> Box value is : {{displayVal}}</p>

[_ts_]: displayVal = '';
getValue(val: string) {
console.warn(val);
this.displayVal=val
}

## Ternary operator:

[_html_]:<button (click)="counter('add')">++</button><br><br>

<p>The Value of Count : {{count}}</p>
<button (click)="counter('minus')">--</button>

[_ts_]: count=0;

counter(type:string){
type === 'add' ? this.count++ : this.count--;
}

## Property Binding:

difference between property binding & interpolation: property binding works in boolean values as well meanwhile interpolation works on string and numeric.

[_html_]: <input type="text" placeholder="first" disabled="{{disable}}">

<input type="text" placeholder="second" [disabled]=disable>

[_ts_]: disable = true;

## If Else:

[_html_]: <h1 \*ngIf="show; else elseBlock">if condition</h1>

<ng-template #elseBlock>

  <h1>else condition</h1>
</ng-template>

[_ts_]: show=false;

## Switch Case:

[_html_]: <div [ngSwitch]="color" style="text-transform: capitalize;">

<h1 *ngSwitchCase="'red'" style="color: red;">red color</h1>
<h1 *ngSwitchCase="'blue'" style="color: blue;">blue color</h1>
<h1 *ngSwitchCase="'green'" style="color: green;">green color</h1>
<h1 *ngSwitchCase="'orange'" style="color: orange;">orange color</h1>
<h1 *ngSwitchCase="'pink'" style="color: pink;">pink color</h1>
<h1 *ngSwitchDefault=>unknown color</h1>
</div>

[_ts_]:color = 'purple ';

## Loops:

[_html_]: <h2 \*ngFor="let item of users">Name is: {{item}}</h2> <br><br>

<h2 *ngFor="let item of userDetails"> {{item.name}} -- {{item.email}} -- {{item.phoneNumber}}</h2>

[_ts_]: users= ['anil','basker','sam','peter'];
userDetails = [
{ name: 'anil', email: 'anil@test.com', phoneNumber: 923244593782 },
{ name: 'baskar', email: 'baskar@test.com', phoneNumber: 9232445467982 },
{ name: 'sam', email: 'sam@test.com', phoneNumber: 923245379246 },
{ name: 'peter', email: 'peter@test.com', phoneNumber: 923283062851 },
];

## Nested loop:

[_html_]: <ul *ngFor="let user of users">

<li>{{ user.name }}</li>
<li>{{ user.phone }}</li>
<ul *ngFor="let account of user.socialAccounts">
<li>{{ account }}</li>
</ul>
</ul>

[_ts_]: users = [
{name: 'asad',phone: '1122',socialAccounts: ['facebook', 'insta', 'youtube'],},
{name: 'saad',phone: '3344',socialAccounts: ['youtube', 'insta', 'facebook'],},
{name: 'hamza',phone: '5566',socialAccounts: ['insta', 'facebook', 'youtube'],},
{name: 'hassan',phone: '7788',socialAccounts: ['facebook', 'youtube', 'insta'],},
];

## Style Binding:

[_html_]: <h1 [style.color]="color" [style.backgroundColor]="bgColor">{{title}}</h1>
<button (click)="updateColor()">Update Color</button>

[_ts_]: color= 'blue';
bgColor= 'red'
updateColor(){
this.color = 'green'
this.bgColor = 'yellow'
}

## Forms:

import: import {FormsModule} from '@angular/forms'

[_html_]: <h1 class="text-center mt-5 mb-5">{{ title }}</h1>

<div class="container">
  <div class="row d-flex align-items-start">
    <!-- Form Column -->
    <div class="col-md-6">
      <form #baicForm="ngForm" (ngSubmit)="getData(baicForm.value)" class="d-flex
      flex-column justify-content-center align-items-start" style="max-width: 400px margin: auto">
        <div class="mb-3 w-100">
          <input type="text" class="form-control" ngModel name="name" placeholder="Enter User Name"/>
        </div>

        <div class="mb-3 w-100">
          <input type="email" class="form-control" ngModel name="email" placeholder="Enter User Email" />
        </div>

        <div class="mb-3 w-100">
          <input type="password" class="form-control" ngModel name="password" placeholder="Enter User Password"/>
        </div>

        <button class="btn btn-primary w-100">Submit</button>
      </form>
    </div>

    <!-- List Column -->
    <div class="col-md-6">
      <ul class="list-group text-capitalize">
        <li class="list-group-item mb-2">{{ userdata.name }}</li>
        <li class="list-group-item mb-2">{{ userdata.email }}</li>
        <li class="list-group-item">{{ userdata.password }}</li>
      </ul>
    </div>

  </div>
</div>

[_ts_]: userdata : any;
getData(data: NgForm){
console.warn('data');
this.userdata = data
}

## Todo List:

all code in its compoenent

used Material UI in [_html_] and some [_css_]

[_ts_]: taskName: string = '';
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

## Parent to child Data:

create a coponent like :ng g c child

in [_app.html_]: <app-child [item] ="data"></app-child>
<button (click)="updateChild()">Update Child</button>

in [_app.ts_]: data = 10;
updateChild(){
this.data = Math.floor(Math.random()\*100)
}

in [_child.html_]: <h1>{{item}}</h1>

in [_child.ts_]: add input in import
import { Component, Input } from '@angular/core';
add this in export
@ Input()item = 0;

## Child to parent Data:

same process just rather than input we use output in [_child.ts_] and also emmiter and one more thing we dont use [item] insted we use (item). rest is similar to above.

## Two way binding;

first import import { FormsModule } from '@angular/forms';

[_html_]: <input type="text" [(ngModel)]="name">

<h1>{{name}}</h1>

[_ts_]: name: string = '';

## Pipeline:

[_html_]: <h2>{{today | date : "fullDate"}}</h2>

<h2>{{2000 | currency: 'PKR'}}</h2>

[_ts_]: today = Date();

## Forms:

there are two tyes of forms

1. template driven form
2. reactive forms

## Template driven form:

[_html_]: <form #loginForm="ngForm" (ngSubmit)="userLogin(loginForm.value)">

    <input type="text" placeholder="Enter Name" name="name" ngModel> <br><br>
    <input type="password" placeholder="Enter Password" name="password" ngModel> <br><br>
    <button>Login</button>

</form>

[_ts_]: userLogin(item: any) {
console.warn(item);
}

## Reactive forms:

[_html_]: <form [formGroup]="loginForm" (ngSubmit)="userLogin(loginForm.value)" class="w-50 mx-auto">

  <div class="mb-3">
    <label for="user" class="form-label">Username</label>
    <input
      type="text"
      id="user"
      class="form-control"
      placeholder="Enter Name"
      formControlName="user"
    />
    <div *ngIf="user?.invalid && user?.touched" class="text-danger mt-1">
      This field is invalid
    </div>
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input
      type="password"
      id="password"
      class="form-control"
      placeholder="Enter Password"
      formControlName="password"
    />
    <div *ngIf="password?.invalid && password?.touched" class="text-danger mt-1">
      This field is invalid
    </div>
  </div>

<button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid">Login</button>

<br><br>

  <h2>{{ userName }}</h2>
  <br><br>
  <h2>{{ userPassword }}</h2>
</form>

[_ts_]: import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
loginForm = new FormGroup({
user: new FormControl('', [
Validators.required,
Validators.pattern('[a-zA-Z]+$'),
]),
password: new FormControl('', [
Validators.required,
Validators.minLength(5),
]),
});

get user() {
return this.loginForm.get('user');
}

get password() {
return this.loginForm.get('password');
}

userName: string = '';
userPassword: string = '';
userLogin(item: any) {
this.userName = item.user;
this.userPassword = item.password;
console.log('Username:', this.userName);
console.log('Password:', this.userPassword);
}

## Directives:

*ngIf and *ngFor these are all directives and we can made custom directories as well and use according to requirements.
