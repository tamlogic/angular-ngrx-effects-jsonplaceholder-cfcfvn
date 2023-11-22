import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsApiService {
  constructor(private _http: HttpClient) {}

  getPosts() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
