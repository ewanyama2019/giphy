import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  constructor(private http: HttpClient) { }

}

@Injectable({
  providedIn: 'root'

})
export class DataService {

  // rxjs.of(1, 2, 3);

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://reqres.in/api/users')
  }

  firstClick() {
    return console.log('clicked');
  }
}
