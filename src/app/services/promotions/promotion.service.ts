import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Promotion } from '../../model/promotion.interface';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(private firestore: AngularFirestore) {}

  getPromotions(): Observable<DocumentChangeAction<Promotion>[]> {
    return this.firestore
      .collection<Promotion>('promotions', (ref) => ref.orderBy('name', 'asc'))
      .snapshotChanges();
  }

  getPromotion(name: string) {
    return this.firestore
      .collection<Promotion>('promotions', (ref) => {
        return ref.where('name', '==', name);
      })
      .snapshotChanges();
  }

  async createPromotion(data) {
    return await this.firestore.collection('promotions').add(data);
  }
}
