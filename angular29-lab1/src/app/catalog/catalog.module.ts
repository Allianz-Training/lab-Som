import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { PanelComponent } from '../panel/panel.component';
import { ProductItemComponent } from '../product/product-item/product-item.component';
import { BackendService } from '../backend.service';



@NgModule({
  declarations: [PanelComponent,ProductItemComponent,ProductListComponent],
  imports: [
    CommonModule
  ],
  providers:[BackendService],
  exports:[PanelComponent,ProductItemComponent,ProductListComponent]
})
export class CatalogModule { }
