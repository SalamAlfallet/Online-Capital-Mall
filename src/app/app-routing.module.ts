import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component'
import {MapPlaceComponent} from './map-place/map-place.component';
import {CategoriesComponent} from './categories/categories.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'mapPlace', component: MapPlaceComponent },
  { path: 'categories', component: CategoriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
