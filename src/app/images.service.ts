import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { image } from './image';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private imageUrl = 'https://api.imgflip.com/get_memes';
  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get<any>(this.imageUrl);
  }
}
