import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output ('closeOutput') closeOutput = new EventEmitter();
  @Input('showModal') showModal: boolean;
  constructor() {}

  ngOnInit(): void {}

  handleCloseModal() {
    this.closeOutput.emit();
  }

  handlePreventPropagation(e: any) {
    e.stopPropagation();
  }
}
