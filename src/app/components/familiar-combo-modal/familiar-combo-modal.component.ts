import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-familiar-combo-modal',
  templateUrl: './familiar-combo-modal.component.html',
  styleUrls: ['./familiar-combo-modal.component.css']
})
export class FamiliarComboModalComponent implements OnInit {
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
