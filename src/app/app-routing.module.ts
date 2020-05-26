import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishesComponent } from './wishes/wishes.component';


const routes: Routes = [
  {path: 'home', component: WishesComponent},
  {path: '**', component: WishesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
