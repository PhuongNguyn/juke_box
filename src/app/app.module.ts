import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { FullPageLoadingComponent } from './components/full-page-loading/full-page-loading.component';

@NgModule({
  declarations: [AppComponent, HomeLayoutComponent, FullPageLoadingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
