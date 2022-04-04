import { Component } from '@angular/core';
import { UserService } from "./core/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent {
  title = 'todo-app';

  authenticated = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.init();

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.authenticated = authenticated;

        if (!authenticated) {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

  async logout() {
    await this.userService.singOut();
    this.authenticated = false;
  }
}
