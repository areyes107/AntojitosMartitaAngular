import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Saucer } from '../../model/saucer.interface';

@Injectable({
  providedIn: 'root',
})
export class SaucerService {
  constructor(private firestore: AngularFirestore) {}

  getSaucers(): Observable<DocumentChangeAction<Saucer>[]> {
    return this.firestore.collection<Saucer>('saucers').snapshotChanges();
  }

  getSaucer(name: string) {
    return this.firestore.collection<Saucer>('saucers', ref => {
      return ref.where('name', '==', name);
    }).snapshotChanges();
  }
}
