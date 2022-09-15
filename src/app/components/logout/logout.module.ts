import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgClass} from "@angular/common";
import {LogoutComponent} from "./logout.component";
import {LogoutRoutingModule} from "./logout-routing.module";

@NgModule({
  declarations: [
    LogoutComponent,
  ],
  exports: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    LogoutRoutingModule,
  ]
})
export class LogoutModule { }
