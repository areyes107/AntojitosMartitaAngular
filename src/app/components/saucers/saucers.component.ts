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

  constructor(private restSaucer: SaucerService) { }

  ngOnInit(): void {
    this.getSaucers();
  }

  getSaucers(){
    this.restSaucer.getSaucers().subscribe(res=>{
      console.log(res)
      this.saucers = res.saucerFound;
      console.log(this.saucers);
    })
  }

  onSubmit(){

  }

}
