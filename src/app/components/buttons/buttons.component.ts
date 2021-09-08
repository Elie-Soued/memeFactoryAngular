import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { image } from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Output() back = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() random = new EventEmitter();
  @Output() generate = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  goBack() {
    this.back.emit();
  }

  goNext() {
    this.next.emit();
  }

  goRandom() {
    this.random.emit();
  }

  generateImage() {
    this.generate.emit();
  }

  resetImage() {
    this.reset.emit();
  }
}
