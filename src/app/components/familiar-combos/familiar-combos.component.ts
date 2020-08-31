import { Component, OnInit } from '@angular/core';
import { FamiliarComboService } from '../../services/familiar-combo/familiar-combo.service';

@Component({
  selector: 'app-familiar-combos',
  templateUrl: './familiar-combos.component.html',
  styleUrls: ['./familiar-combos.component.css'],
})
export class FamiliarCombosComponent implements OnInit {
  familiarCombos = [];
  search;

  constructor(private familiarComboService: FamiliarComboService) {}

  ngOnInit(): void {
    this.getFamiliarCombos();
  }

  getFamiliarCombos() {
    this.familiarComboService
      .getFamiliarCombos()
      .subscribe((familiarCombos) => {
        this.familiarCombos = familiarCombos.map((familiarCombo) => {
          return familiarCombo.payload.doc.data();
        });
      });
  }

  onSubmit() {}
}
