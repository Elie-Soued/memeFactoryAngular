import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css'],
})
export class TextBoxComponent implements OnInit {
  @Input() textBox?: string;
  @Input() textBoxColor: string = 'black';
  @Input() textBoxFontSize: number = 15;

  constructor() {}

  ngOnInit(): void {}
}
