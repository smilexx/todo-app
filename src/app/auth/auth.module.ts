import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";

import { AuthRoutingModule } from './auth-routing.module';
import { CoreModule } from "../core/core.module";
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    MatCardModule,
  ]
})
export class AuthModule {
}
