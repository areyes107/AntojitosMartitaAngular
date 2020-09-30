import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../services/promotions/promotion.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promotions = [];
  search;
  photoUrlToShow: string;

  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.getPromotions();
  }

  getPromotions() {
    this.promotionService.getPromotions().subscribe((promotions) => {
      this.promotions = promotions.map((promotion) => {
        return promotion.payload.doc.data();
      });
    });
  }

  handleCloseModal(){
    this.photoUrlToShow = null;
  }

  handleOpenModal(photoUrl: string){
    this.photoUrlToShow = photoUrl;
  }

  onSubmit() {}

}
