import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Warehouse1Component } from './components/warehouse1/warehouse1.component';
import { Warehouse2Component } from './components/warehouse2/warehouse2.component';

const routes: Routes = [
  {path: '', redirectTo: 'WarehouseManager/Home', pathMatch: 'full'},
  {path: 'WarehouseManager/Home', component: HomePageComponent},
  {path: 'warehouse1/inventory', component: Warehouse1Component},
  {path: 'warehouse2/inventory', component: Warehouse2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
