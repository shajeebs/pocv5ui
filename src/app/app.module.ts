import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
 
import { DataService } from './services/data.service';
import { TodoService } from './services/todo.service';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { AccountComponent } from './components/account/account.component';
import { TodoComponent } from './components/todo/todo.component';
 
const appRoutes: Routes = [
  {path:'', component:UserComponent },
  {path:'blogpost', component:BlogpostComponent },
  {path:'account', component:AccountComponent },
  {path:'todo', component:TodoComponent },
];
 
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BlogpostComponent,
    AccountComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
