import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'listings', component: ListingComponent},
  { path: '**', component: PagenotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
