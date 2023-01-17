import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/components/services/inventory.service';
import { InventoryItem } from 'src/app/inventoryItem';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse1.component.html',
  styleUrls: ['./warehouse1.component.css']
})
export class Warehouse1Component implements OnInit{
  title = 'warehouse-manager';
  public inventoryItems!: InventoryItem[];

  constructor(private inventoryService: InventoryService){}

  ngOnInit(): void {
    this.getInventoryItems();
  }

  public getInventoryItems(): void {
    this.inventoryService.getInventory().subscribe(
      (response: InventoryItem[]) => {
        this.inventoryItems = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddItem(addForm: NgForm): void {
    document.getElementById('add-inventory-form')?.click();
    this.inventoryService.addInventory(addForm.value).subscribe(
      (response: InventoryItem) => {
        this.getInventoryItems;
      }

    );
  }

  public onOpenModal(inventoryItem: InventoryItem, mode: string): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal')
    if (mode === 'add') {
      button.setAttribute('data-target', '#addItemModal')
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editItemModal')
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteItemModal')
    }
    container?.appendChild(button);
    button.click();
  }

}
