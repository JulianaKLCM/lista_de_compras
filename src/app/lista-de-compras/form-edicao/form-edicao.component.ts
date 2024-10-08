import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../../data/Item';

@Component({
  selector: 'app-form-edicao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-edicao.component.html',
  styleUrls: ['./form-edicao.component.css'],
})
export class FormEdicaoComponent {
  @Input() item!: Item;
  @Output() closeForm = new EventEmitter<void>();
  @Output() updateItem = new EventEmitter<Item>();

  descricao: string = '';
  quantidade: number = 1;
  obs: string = '';

  ngOnInit() {
    this.descricao = this.item.descricao;
    this.quantidade = this.item.quantidade;
    this.obs = this.item.obs || '';
  }

  onSubmit() {
    const updatedItem: Item = {
      ...this.item,
      descricao: this.descricao,
      quantidade: this.quantidade,
      obs: this.obs,
    };

    this.updateItem.emit(updatedItem);
  }

  onCancel() {
    this.closeForm.emit();
  }
}
