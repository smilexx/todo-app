import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, ReplaySubject } from "rxjs";
import { User } from "@supabase/supabase-js";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService) {
  }

  init() {
    const user = this.getUser();
    console.log(user);
    this.isAuthenticatedSubject.next(false);
    // if (user) {
    //   this.currentUserSubject.next(user);
    //   this.isAuthenticatedSubject.next(true);
    // }
  }

  getUser() {
    return this.apiService.client?.auth.user();
  }

  async signIn(email: string, password: string) {
    const data = await this.apiService.client?.auth.signIn({email, password})

    console.log(data);
  }

  async signUp(email: string, password: string) {
    const data = await this.apiService.client?.auth.signUp({email, password})

    console.log(data);
  }
}
