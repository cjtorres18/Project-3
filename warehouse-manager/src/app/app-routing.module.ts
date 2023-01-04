import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { Warehouse1Component } from './components/warehouse1/warehouse1.component';
import { Warehouse2Component } from './components/warehouse2/warehouse2.component';

const routes: Routes = [
  {path: '', redirectTo: 'WarehouseManager/Home', pathMatch: 'full'},
  {path: 'WarehouseManager/Home', component: HomePageComponent},
  {path: 'inventory/add-item', component: AddItemComponent},
  {path: 'inventory/edit-item', component: EditItemComponent},
  {path: 'inventory/view-item', component: ViewItemComponent},
  {path: 'warehouse1/inventory', component: Warehouse1Component},
  {path: 'warehouse2/inventory', component: Warehouse2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
