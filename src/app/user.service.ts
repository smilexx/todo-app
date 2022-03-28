import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get token() {
    return localStorage.getItem('token');
  }

  set token(value: string | null) {
    if (value == null) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', value);
    }
  }

  constructor() {
  }


}
