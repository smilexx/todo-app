import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { TodoService } from "./services/todo.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [ UserService, ApiService, TodoService ]
    };
  }
}
