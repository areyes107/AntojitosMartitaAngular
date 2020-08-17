import { Component, OnInit } from '@angular/core';
import { SaucerService } from '../../services/saucer/saucer.service';

@Component({
  selector: 'app-saucers',
  templateUrl: './saucers.component.html',
  styleUrls: ['./saucers.component.css']
})
export class SaucersComponent implements OnInit {
  saucers = [];
  search;

  constructor(private saucerService: SaucerService) { }

  ngOnInit(): void {
    this.getSaucers();
  }

  getSaucers(){
    this.saucerService.getSaucers().subscribe((saucers) => {
      this.saucers = saucers.map((saucer) => {
        return saucer.payload.doc.data();
      });
    });
  }

  onSubmit(){

  }

}
