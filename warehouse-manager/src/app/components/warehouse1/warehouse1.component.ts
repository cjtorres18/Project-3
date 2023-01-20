
import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';
import { InventoryItem } from 'src/app/inventoryItem';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse1.component.html',
  styleUrls: ['./warehouse1.component.css']
})
export class Warehouse1Component implements OnInit{
  title = 'warehouse-manager';
  inventoryItems!: InventoryItem[];
  editForm!: FormGroup;


  constructor(private inventoryService: InventoryService,
              private fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.getInventory();
  }


  public getInventory(): void {
    this.inventoryService.getInventory().subscribe(
      (response: InventoryItem[]) => {
        this.inventoryItems = response;
      },
    );
    console.log("Inside the get method")
  }


    addInventory(addForm: NgForm): void {
      document.getElementById('add-inventory-button')?.click();
      console.log(addForm)
    this.inventoryService.addInventory(addForm).subscribe(
      (response) => {
        console.log(response);
        this.getInventory();
      }
    )
    console.log("Inside the add method")
  }

  editInventoryItem(inventoryItem: InventoryItem): void {
  this.inventoryService.updateInventoryItem(inventoryItem).subscribe(
    (response: InventoryItem) => {
      console.log(response);
      this.getInventory();
    }
  )
  console.log("Inside the add method")
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
