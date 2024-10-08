import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../../data/Item';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: any;
  @Input() customClass: string = '';

  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  @Input() items: Item[] = [];
  @Input() statusFiltro!: string;
  @Input() titulo!: string;

  @Output() toggleStatus = new EventEmitter<Item>();
  @Output() delete = new EventEmitter<Item>();
  @Output() edit = new EventEmitter<Item>();

  onToggleStatus(item: Item) {
    this.toggleStatus.emit(item);
  }

  onDelete(item: Item, event: Event) {
    event.stopPropagation();

    const confirmDelete = window.confirm(
      `Deseja realmente excluir o item: "${item.descricao}"?`
    );

    if (confirmDelete) {
      this.delete.emit(item);
    }
  }

  onEdit(item: Item, event: Event) {
    event.stopPropagation();
    this.edit.emit(item);
  }
}
