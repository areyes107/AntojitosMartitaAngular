import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-combo-modal',
  templateUrl: './combo-modal.component.html',
  styleUrls: ['./combo-modal.component.css']
})
export class ComboModalComponent implements OnInit {
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
