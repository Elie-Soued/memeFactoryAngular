import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../images.service';
import { image } from 'src/app/image';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css'],
})
export class ImageHolderComponent implements OnInit {
  images?: any = [];
  index: number = 0;

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageService
      .getImages()
      .subscribe((object) => (this.images = object.data.memes));
  }
}
