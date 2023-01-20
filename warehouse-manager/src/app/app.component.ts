
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InventoryService } from './inventory.service';
import { InventoryItem } from './inventoryItem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'warehouse-manager';
  public inventoryItems!: InventoryItem[];

  constructor(private inventoryService: InventoryService){}

  ngOnInit(): void {
    this.getInventoryItems();
  }

  public getInventoryItems(): void {
    this.inventoryService.getInventory().subscribe(
      (Response: InventoryItem[]) => {
        this.inventoryItems = Response;
      }
    );
  }



}
