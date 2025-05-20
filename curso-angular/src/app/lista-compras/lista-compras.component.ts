import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemLista } from './item-lista';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item: string = '';
  list: ItemLista[] = []

  form: FormGroup = new FormGroup({
    itemList: new FormControl('', Validators.required)
  });


  submit(): void {
    const itemList = new ItemLista();
    itemList.name = this.form.value.itemList;
    itemList.id = this.list.length + 1;

    this.list.push(itemList);
    this.form.reset();
  }

}
