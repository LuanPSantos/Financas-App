import { firestore } from 'firebase';

export class Lancamento {
  id: string;
  titulo: string;
  data: firestore.Timestamp;
  valor: number;
  categoria: string;
  pago: boolean;
  parcela: number;
  parcelas: number;
}
