import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service'
import { ApiService } from './services/api.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    ApiService,
  ]
})
export class CoreModule {
}
