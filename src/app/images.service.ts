import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
