import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
