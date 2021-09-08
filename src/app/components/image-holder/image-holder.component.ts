import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css'],
})
export class ImageHolderComponent implements OnInit {
  index: number = 0;
  @Input() picture?: string;
  @Input() upperTextBox?: string;
  @Input() lowerTextBox?: string;
  @Input() upperTextBoxColor: string = 'black';
  @Input() lowerTextBoxColor: string = 'black';
  @Input() fontSizeUpper: number = 15;
  @Input() fontSizeLower: number = 15;

  constructor() {}

  ngOnInit(): void {}
}
