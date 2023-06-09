import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ApartmentCardComponent } from './apartment-card/apartment-card.component';



@NgModule({
  declarations: [
    MainContentComponent,
    ApartmentCardComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    MainContentComponent
  ]
})
export class BuyModule { }
