import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.css']
})
export class PromotionModalComponent implements OnInit {
  @Output ('closeOutput') closeOutput = new EventEmitter();
  @Input('showModal') showModal: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  handleCloseModal() {
    this.closeOutput.emit();
  }

  handlePreventPropagation(e: any) {
    e.stopPropagation();
  }

}
