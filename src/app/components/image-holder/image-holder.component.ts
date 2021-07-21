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
  uploadedPicture?: any;
  upperInput = new FormControl('');
  lowerInput = new FormControl('');
  colorInput = new FormControl('');
  fileInput = new FormControl('');

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageService
      .getImages()
      .subscribe((object) => this.setImages(object.data.memes));
  }

  setImages(data: any) {
    this.images = data;
  }

  goNext = () => {
    this.index === this.images.length - 1 ? (this.index = 0) : this.index++;
  };

  goBack = () => {
    this.index === 0 ? (this.index = this.images.length - 1) : this.index--;
  };

  goRandom = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    this.index = randomNumber;
  };

  onFileSelected(e: any) {
    const uploaded = window.URL.createObjectURL(e.target.files[0]);
    this.uploadedPicture = uploaded;
    console.log(uploaded);
  }
}
