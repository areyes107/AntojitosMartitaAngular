import { Component, OnInit } from '@angular/core';
import { ComboService } from '../../services/combo/combo.service';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css'],
})
export class CombosComponent implements OnInit {
  combos = [];
  search;
  photoUrlToShow: string;

  constructor(private comboService: ComboService) {}

  ngOnInit(): void {
    this.getCombos();
  }

  getCombos() {
    this.comboService.getCombos().subscribe((combos) => {
      this.combos = combos.map((combo) => {
        return combo.payload.doc.data();
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
