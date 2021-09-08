import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../images.service';
import { FormControl } from '@angular/forms';
import { Image } from '../../image';
import { SanitizePipe } from '../../sanitize.pipe';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-app-holder',
  templateUrl: './app-holder.component.html',
  styleUrls: ['./app-holder.component.css'],
})
export class AppHolderComponent implements OnInit {
  //Image related properties
  images?: Image[];
  index: number = 0;
  centralPicture?: string;
  uploadedPicture?: string;
  generatedImage?: string;

  //Input and TextBox
  upperTextBoxColor: string = 'black';
  lowerTextBoxColor: string = 'black';
  upperTextBox?: string;
  lowerTextBox?: string;
  fontSizeUpper: number = 15;
  fontSizeLower: number = 15;

  fileInput = new FormControl('');

  constructor(
    private imageService: ImagesService,
    private sanitize: SanitizePipe
  ) {}

  ngOnInit(): void {
    this.getImages();
  }

  //Images related methods

  getImages(): void {
    this.imageService
      .getImages()
      .subscribe((object) => this.setImages(object.data.memes));
  }

  setImages(data: Image[]) {
    this.images = data;
    this.centralPicture = this.images[this.index].url;
  }

  goNext = () => {
    if (this.images) {
      if (this.index === this.images.length - 1) {
        this.index = 0;
        this.centralPicture = this.images[0].url;
      } else {
        this.centralPicture = this.images[++this.index].url;
      }
    }
  };

  goBack = () => {
    if (this.images) {
      if (this.index === 0) {
        this.index = this.images.length - 1;
        this.centralPicture = this.images[this.images.length - 1].url;
      } else {
        this.centralPicture = this.images[--this.index].url;
      }
    }
  };

  goRandom = () => {
    if (this.images) {
      let randomNumber = Math.floor(Math.random() * 100);
      this.centralPicture = this.images[randomNumber].url;
    }
  };

  onFileSelected(event: any) {
    const uploaded = URL.createObjectURL(event.target.files[0]);
    this.centralPicture = this.sanitize.transform(uploaded);
  }

  generate = (dom: HTMLElement) => {
    htmlToImage
      .toPng(dom)
      .then((dataUrl) => {
        this.generatedImage = dataUrl;
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  reset = () => {
    this.generatedImage = '';
    this.upperTextBox = '';
    this.lowerTextBox = '';
  };

  // Input  and TextBox related methods

  //Set the Text for the text-box

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
