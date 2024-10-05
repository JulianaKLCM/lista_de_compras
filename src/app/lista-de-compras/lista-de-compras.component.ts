import { Component } from '@angular/core';
import { Item } from '../../data/Item';
import { CommonModule } from '@angular/common';
import { FormInclusaoComponent } from './form-inclusao/form-inclusao.component';

@Component({
  selector: 'app-lista-de-compras',
  standalone: true,
  imports: [CommonModule, FormInclusaoComponent],
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css'],
})
export class ListaDeComprasComponent {
  items: Item[] = [];

  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onAddItem(item: { descricao: string; quantidade: number; obs?: string }) {
    const newItem: Item = {
      id: this.items.length + 1,
      descricao: item.descricao,
      quantidade: item.quantidade,
      status: 'pendente',
      obs: item.obs || '',
    };

    this.items.push(newItem);
  }

  toggleItemStatus(item: Item) {
    item.status = item.status === 'pendente' ? 'comprado' : 'pendente';

    window.alert(
      `${item.status === 'comprado'
        ? `${item.descricao} Comprado`
        : `${item.descricao} Pendente`
      }`
    );
  }

  deleteItem(item: Item, event: Event) {
    event.stopPropagation();

    const confirmDelete = window.confirm(
      `Deseja realmente excluir o item: "${item.descricao}"?`
    );

    if (confirmDelete) {
      this.items = this.items.filter((i) => i.id !== item.id);
    }
  }
}
