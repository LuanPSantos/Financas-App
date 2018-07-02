import { firestore } from 'firebase';

export class Lancamento {
  titulo: string;
  data: firestore.Timestamp;
  valor: number;
  categoria: string;
}
