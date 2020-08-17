import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Combo } from '../../model/combo.interface';

@Injectable({
  providedIn: 'root',
})
export class ComboService {
  constructor(private firestore: AngularFirestore) {}

  getCombos(): Observable<DocumentChangeAction<Combo>[]> {
    return this.firestore.collection<Combo>('combos').snapshotChanges();
  }

  getCombo(name: string) {
    return this.firestore.collection<Combo>('combos', ref => {
      return ref.where('name', '==', name);
    }).snapshotChanges();
  }
}
