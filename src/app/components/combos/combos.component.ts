import { Component, OnInit } from '@angular/core';
import { ComboService } from '../../services/combo/combo.service';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {
  combos = [];
  search;

  constructor(private restCombo: ComboService) { }

  ngOnInit(): void {
    this.getCombos();
  }

  getCombos(){
    this.restCombo.getCombos().subscribe(res=>{
      console.log(res);
      this.combos = res.comboFound;
      console.log(this.combos);
    })
  }

  onSubmit(){

  }

}
