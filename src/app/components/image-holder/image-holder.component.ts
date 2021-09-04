import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../images.service';
import { FormControl } from '@angular/forms';
import { Image } from '../../image';
import { SanitizePipe } from '../../sanitize.pipe';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css'],
})
export class ImageHolderComponent implements OnInit {
  images?: Image[];
  index: number = 0;
  centralPicture?: string;
  uploadedPicture?: string;
  generatedImage?: string;
  upperInput = new FormControl('');
  lowerInput = new FormControl('');
  colorInput = new FormControl('');
  fileInput = new FormControl('');

  constructor(
    private imageService: ImagesService,
    private sanitize: SanitizePipe
  ) {}

  ngOnInit(): void {
    this.getImages();
  }

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
  };
}
