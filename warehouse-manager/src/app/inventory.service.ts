import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { InventoryItem } from './inventoryItem';
import { enviroment } from 'enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiServerUrl = enviroment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getInventory(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/inventoryItem/all`)
  }

  public addInventory(inventoryItem: InventoryItem): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/inventoryItem/add`, inventoryItem)
  }

  public updateInventory(inventoryItem: InventoryItem): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}/inventoryItem/update`, inventoryItem)
  }

  public deleteInventory(inventoryItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/inventoryItem/delete/${inventoryItemId}`)
  }
}
