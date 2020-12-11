import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFruitComponent } from './pages/create-fruit/create-fruit.component';
import { FruitListComponent } from './pages/fruit-list/fruit-list.component';



const routes: Routes = [
  { path: '', component: FruitListComponent},
  { path: 'create', component: CreateFruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
