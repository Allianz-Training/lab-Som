import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router'
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { MyFormComponent } from './my-form/my-form.component';

const routes: Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'todolist',
    component:ToDoListComponent
  },
  {
    path: 'productitem',
    component:ProductItemComponent
  },
  {
    path: 'productlist',
    component:ProductListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoListComponent,
    TaskComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule, FormsModule,CatalogModule,HomeModule,RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
