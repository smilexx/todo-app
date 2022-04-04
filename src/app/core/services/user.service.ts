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
    this.isAuthenticatedSubject.next(false);

    if (user) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }
  }

  getUser() {
    return this.apiService.client?.auth.user();
  }

  async signIn(email: string, password: string) {
    const { user, error } = (await this.apiService.client?.auth.signIn({ email, password })) || {};

    if (error) {
      throw new Error(error.message);
    }

    if (user) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }

    return user;
  }

  async signUp(email: string, password: string) {
    const data = await this.apiService.client?.auth.signUp({ email, password });
  }

  async singOut() {
    await this.apiService.client?.auth.signOut();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }
}
