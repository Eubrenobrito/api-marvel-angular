import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable, observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = '0a624a82bfe59e4990c94cba03c8a7ff';
  HASH = 'd45256abd61b6e9df41a8ad6b336dbf6';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {
  }

  getAllCharacters(): Observable<any> {
    // return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
