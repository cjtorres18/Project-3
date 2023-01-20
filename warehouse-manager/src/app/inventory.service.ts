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

  public getInventory(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/inventoryItem/all`)
  }

  public addInventory(inventoryItem: any) {
    console.log(inventoryItem);
    return this.http.post((this.apiServerUrl + "/inventoryItem/add"), inventoryItem).pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('new error'))
  }

  public updateInventoryItem(inventoryItem: InventoryItem): Observable<any> {
    return this.http.put<any>((this.apiServerUrl + "/inventoryItem/update") , inventoryItem).pipe(catchError(this.handleError))
  }

  public deleteInventory(inventoryItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/inventoryItem/delete/${inventoryItemId}`)
  }
}
