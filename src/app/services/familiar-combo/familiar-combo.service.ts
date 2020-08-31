import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FamiliarCombo } from '../../model/familiar-combo.inferface';

@Injectable({
  providedIn: 'root',
})
export class FamiliarComboService {
  constructor(private firestore: AngularFirestore) {}

  getFamiliarCombos(): Observable<DocumentChangeAction<FamiliarCombo>[]> {
    return this.firestore
      .collection<FamiliarCombo>('familiarCombos')
      .snapshotChanges();
  }

  getFamiliarCombo(name: string) {
    return this.firestore
      .collection<FamiliarCombo>('familiarCombos', (ref) => {
        return ref.where('name', '==', name);
      })
      .snapshotChanges();
  }
}
