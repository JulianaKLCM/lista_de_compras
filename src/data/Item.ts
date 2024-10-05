export interface Item {
  id: number;
  descricao: string;
  quantidade: number;
  obs?: string;
  status: 'pendente' | 'comprado';
}
