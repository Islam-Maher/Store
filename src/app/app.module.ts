import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { EachPhotoComponent } from './each-photo/each-photo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PurchasedComponent } from './purchased/purchased.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, Validators } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { PurchasedChildComponent } from './purchased-child/purchased-child.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    EachPhotoComponent,
    NavBarComponent,
    PurchasedComponent,
    DetailsComponent,
    SuccessComponent,
    PurchasedChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
