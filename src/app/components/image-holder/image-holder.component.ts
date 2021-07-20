import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../images.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css'],
})
export class ImageHolderComponent implements OnInit {
  images?: any;
  index: number = 0;
  upperInput = new FormControl('');
  lowerInput = new FormControl('');
  colorInput = new FormControl('');

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageService
      .getImages()
      .subscribe((object) => (this.images = object.data.memes));
  }

  goNext = () => {
    this.index === 99 ? (this.index = 0) : this.index++;
  };

  goBack = () => {
    this.index === 0 ? (this.index = 99) : this.index--;
  };

  goRandom = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    this.index = randomNumber;
  };
}
