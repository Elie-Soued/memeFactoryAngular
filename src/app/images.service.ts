import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Response } from './Response';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private imageUrl = 'https://api.imgflip.com/get_memes';
  constructor(private http: HttpClient) {}

  getImages(): Observable<Response> {
    return this.http
      .get<Response>(this.imageUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
