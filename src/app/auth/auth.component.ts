import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../core/services/user.service";
import { Router } from "@angular/router";

const errorsFields: Record<string, any> = {
  email: {
    required: 'You must enter a value',
    email: 'Not a valid email'
  },
  password: {
    required: 'You must enter a value',
  }
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.scss' ]
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  hidePassword = true;
  isSubmitting = false;
  error = null;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.authForm = this.fb.group({
      email: [ '', Validators.required ],
      password: [ '', Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  async submitForm() {
    try {
      const { email, password } = this.authForm.value;

      this.isSubmitting = true;
      this.error = null;

      await this.userService.signIn(email, password);

      this.router.navigate([ '' ]);
    } catch (e: any) {
      this.error = e.message;
    } finally {
      this.isSubmitting = false;
    }
  }

  getErrorMessage(field: string) {
    const { errors } = this.authForm.controls[field];

    if (errors) {
      const [ key ] = Object.keys(errors);
      const errorsList = errorsFields[field];

      return errorsList?.[key] || '';
    }

    return '';
  }
}
