import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4componentComponent } from './lab4component/lab4component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Hw3TopbannerComponent } from './hw3-topbanner/hw3-topbanner.component';
import { Hw3SearchBarComponent } from './hw3-search-bar/hw3-search-bar.component';
@NgModule({
 declarations: [AppComponent, HomeComponent, CountingComponent, Lab4componentComponent, NavbarComponent, TopBannerComponent, CategoryMenuComponent, SearchBarComponent, ToDoListComponent, Hw3TopbannerComponent, Hw3SearchBarComponent],
 imports: [BrowserModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {}