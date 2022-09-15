import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register.component";
import {RegisterRoutingModule} from "./register-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  exports: [
    RegisterComponent,
  ],
    imports: [
      CommonModule,
      RegisterRoutingModule,
      ReactiveFormsModule,
    ]
})
export class RegisterModule { }
