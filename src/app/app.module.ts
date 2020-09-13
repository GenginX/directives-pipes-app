import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeTextDirective } from './directive/change-text.directive';
import { SnakeCasePipe } from './pipe/snake-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    SnakeCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
