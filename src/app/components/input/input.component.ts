import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() meme = new EventEmitter<string>();
  @Output() color = new EventEmitter<string>();
  @Output() sizeIncrease = new EventEmitter<number>();
  @Output() sizeDecrease = new EventEmitter<number>();

  input = new FormControl('');
  colorInput = new FormControl('');
  fontSize: number = 15;

  constructor() {}

  ngOnInit() {}

  sendMeme() {
    this.meme.emit(this.input.value);
  }

  changeColor() {
    this.color.emit(this.colorInput.value);
  }

  increaseSize() {
    this.sizeIncrease.emit();
  }

  decreaseSize() {
    this.sizeDecrease.emit();
  }
}
