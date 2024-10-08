import { Component } from '@angular/core';
import { Item } from '../../data/Item';
import { CommonModule } from '@angular/common';
import { FormInclusaoComponent } from './form-inclusao/form-inclusao.component';
import { FormEdicaoComponent } from './form-edicao/form-edicao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPencilAlt,
  faTrash,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-lista-de-compras',
  standalone: true,
  imports: [
    CommonModule,
    FormInclusaoComponent,
    FormEdicaoComponent,
    FontAwesomeModule,
    CardComponent,
  ],
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css'],
})
export class ListaDeComprasComponent {
  items: Item[] = [];

  showForm = false;
  isEditing = false;
  currentItem: Item | null = null;

  toggleForm() {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.isEditing = false;
      this.currentItem = null;
    }
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

  deleteItem(item: Item) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faPlus = faPlus;

  editItem(item: Item) {
    this.currentItem = { ...item };
    this.isEditing = true;
    this.showForm = true;
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentItem = null;
    this.showForm = false;
  }

  onUpdateItem(updatedItem: Item) {
    const index = this.items.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
    this.cancelEdit();
  }
}
