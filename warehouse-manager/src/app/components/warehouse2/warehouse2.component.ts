import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';
import { InventoryItem } from 'src/app/inventoryItem';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse2.component.html',
  styleUrls: ['./warehouse2.component.css']
})
export class Warehouse2Component implements OnInit{
  title = 'warehouse-manager';
  @Input()
  warehouseId = 2;
  inventoryItems!: InventoryItem[];
  editForm!: FormGroup;

  itemToUpdate: InventoryItem = {
    id: 0,
    name: "",
    brand: "",
    imageUrl: "",
    barcode: "",
    warehouseId: 2
  }

  itemsToDelete: InventoryItem = {
    id: 0,
    name: "",
    brand: "",
    imageUrl: "",
    barcode: "",
    warehouseId: 2
  }


  constructor(private inventoryService: InventoryService,
              private fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.getInventory();
  }


  public getInventory(): void {
    this.inventoryService.getInventory(this.warehouseId).subscribe(
      (response: InventoryItem[]) => {
        this.inventoryItems = response;
      },
    );
    console.log("Inside the get method")
  }


    addInventory(addForm: NgForm): void {
      document.getElementById('add-inventory-button')?.click();
      // console.log(addForm)
    this.inventoryService.addInventory(addForm).subscribe(
      (response) => {
        console.log(response);
        this.getInventory();
      }
    )
    console.log("Inside the add method")
  }


  editInventoryItem(): void {
    this.inventoryService.updateInventoryItem(this.itemToUpdate).subscribe(
      (response: InventoryItem) => {
        console.log(response);
        this.getInventory();
      }
    )
    console.log("Inside the edit method")
  }

  deleteInventoryItem() {
    this.inventoryService.deleteinventoryItem(this.itemToUpdate.id).subscribe(
      (response) =>{
        console.log(response)
        this.getInventory();
      }

    );
    console.log("inside the delete method")
  }

  sendToUpdateModal(inventoryItem: InventoryItem) {
    this.itemToUpdate.id = inventoryItem.id;
    this.itemToUpdate.brand = inventoryItem.brand;
    this.itemToUpdate.name = inventoryItem.name;
    this.itemToUpdate.imageUrl = inventoryItem.imageUrl;
    this.itemToUpdate.barcode = inventoryItem.barcode;
    this.itemToUpdate.warehouseId = inventoryItem.warehouseId;
  }

  sentToDeleteModal(inventoryItem: InventoryItem) {
    this.itemToUpdate.id = inventoryItem.id;
    this.itemToUpdate.brand = inventoryItem.brand;
    this.itemToUpdate.name = inventoryItem.name;
    this.itemToUpdate.imageUrl = inventoryItem.imageUrl;
    this.itemToUpdate.barcode = inventoryItem.barcode;
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
    console.log("inside onOpenModel" + inventoryItem)
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteItemModal')
    }
    container!.appendChild(button);
    button.click();
  }




}
