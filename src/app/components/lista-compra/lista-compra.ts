import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista'
import { NgClass } from '@angular/common';

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-lista-compra',
  styleUrl: './lista-compra.scss',
  templateUrl: './lista-compra.html',
})
export class ListaCompra {
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    console.log("Item recebido: ", this.item);

    let itemlista = new ItemLista();
    itemlista.nome = this.item;
    itemlista.id = this.lista.length + 1;

    this.lista.push(itemlista)
    // this.item = '';
    console.table(this.lista)
  }

  riscarItem(itemlista: ItemLista) {
    itemlista.comprado = !itemlista.comprado
  }
}
