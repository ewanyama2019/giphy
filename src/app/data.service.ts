import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceNameService {

//   constructor(private http: HttpClient) { }

// }

@Injectable({
  providedIn: 'root'

})
export class DataService {

   constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=UA48g9z6GbD3sZlqYNVG0Isv61PJSZVH&limit=5');
    }

  // firstClick() {
  //   return console.log('clicked');
  // }
}
