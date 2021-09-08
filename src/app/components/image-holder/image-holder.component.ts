import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css'],
})
export class ImageHolderComponent implements OnInit {
  //Image related properties
  index: number = 0;
  @Input() picture?: string;
  @Input() textBox?: string;

  //Input and TextBox
  upperTextBoxColor: string = 'black';
  lowerTextBoxColor: string = 'black';
  upperTextBox?: string;
  lowerTextBox?: string;
  fontSizeUpper: number = 15;
  fontSizeLower: number = 15;

  constructor() {}

  ngOnInit(): void {}
  setUpperTextBox(value: string) {
    this.upperTextBox = value;
  }

  setLowerTextBox(value: string) {
    this.lowerTextBox = value;
  }

  //Set the color for the text-box

  setUpperTextBoxColor(value: string) {
    this.upperTextBoxColor = value;
  }

  setLowerTextBoxColor(value: string) {
    this.lowerTextBoxColor = value;
  }

  //Set the size for the text-box

  increaseTextBoxUpper() {
    this.fontSizeUpper = this.fontSizeUpper + 1;
  }

  decreaseTextBoxUpper() {
    this.fontSizeUpper = this.fontSizeUpper - 1;
  }

  increaseTextBoxLower() {
    this.fontSizeLower = this.fontSizeLower + 1;
  }

  decreaseTextBoxLower() {
    this.fontSizeLower = this.fontSizeLower - 1;
  }
}
