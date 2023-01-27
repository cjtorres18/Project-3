import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import { InventoryItem } from './inventoryItem';
import { enviroment } from 'enviroments/enviroment';
import { Warehouse1Component } from './components/warehouse1/warehouse1.component';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
   apiServerUrl = enviroment.apiBaseUrl;



  constructor(private http: HttpClient) { }

  public getInventory(warehouseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/inventoryItem/all/` + warehouseId)
  }

  public addInventory(inventoryItem: any) {
    console.log(inventoryItem);
    return this.http.post((this.apiServerUrl + "/inventoryItem/add"), inventoryItem)
  }

  // handleError(error: HttpErrorResponse) {
  //   return throwError(() => new Error('new error'))
  // }

  public updateInventoryItem(inventoryItem: InventoryItem): Observable<any> {
    return this.http.put<any>((this.apiServerUrl + "/inventoryItem/update") , inventoryItem)
  }



  public deleteinventoryItem(id: number){
    return this.http.delete(this.apiServerUrl + "/inventoryItem/delete?id=" + id)
  }
}

