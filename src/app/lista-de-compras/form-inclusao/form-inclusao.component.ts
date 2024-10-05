import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-inclusao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-inclusao.component.html',
  styleUrls: ['./form-inclusao.component.css'],
})
export class FormInclusaoComponent {
  descricao: string = '';
  quantidade: number = 1;
  obs: string = '';
  status: string = 'pendente';

  @Output() closeForm = new EventEmitter<void>();
  @Output() addItem = new EventEmitter<{
    descricao: string;
    quantidade: number;
    obs?: string;
    status: string;
  }>();

  onSubmit() {
    const regex = /[^a-zA-Z0-9,. ]/g;
    const descricaoLimpa = this.descricao.replace(regex, '').trim();
    const descricaoValida = descricaoLimpa.length > 0;

    if (!descricaoValida) {
      alert('Insira uma descrição válida para o item');
      return;
    }

    this.addItem.emit({
      descricao: descricaoLimpa,
      quantidade: this.quantidade,
      obs: this.obs,
      status: this.status,
    });

    this.closeForm.emit();
  }

  onCancel() {
    this.closeForm.emit();
  }
}
