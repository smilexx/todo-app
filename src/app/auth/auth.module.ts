import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { AuthRoutingModule } from './auth-routing.module';
import { CoreModule } from "../core/core.module";
import { AuthComponent } from './auth.component';
import { SharedModule } from "../shared/shared.module";
import { UserService } from "../core/services/user.service";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
})
export class AuthModule {
}
