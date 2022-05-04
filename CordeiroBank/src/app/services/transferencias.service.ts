import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Transferencia } from '../transferencia';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  constructor(private firestore: Firestore) {}
  getTransferencia(): Observable<Transferencia[]> {
    const extrato = collection(this.firestore, 'transferencias');
    return collectionData(extrato, { idField: 'id' }) as Observable<
      Transferencia[]
    >;
  }

  addTransferencia(transferencia: Transferencia) {
    const transacao = collection(this.firestore, 'transferencias');
    return addDoc(transacao, transferencia);
  }
}
