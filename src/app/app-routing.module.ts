import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PhotosComponent } from './photos/photos.component';
import { PurchasedComponent } from './purchased/purchased.component';
import { SuccessComponent } from './success/success.component';
const routes: Routes = [
  {path:'main_page',component:PhotosComponent},
  {path:'details_page',component:DetailsComponent},
  {path:'cart',component:PurchasedComponent},
  {path:'success_page',component:SuccessComponent},
  {path: '**', redirectTo: '/main_page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
