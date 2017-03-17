import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UIRouterModule, Ng2StateDeclaration} from "ui-router-ng2";
import {HomeComponent} from "./home/home.component";

export function resolveFn() {
  return () => {
    return "bar";
  }
}

let state: Ng2StateDeclaration = {
  name: "home",
  url: "/home",
  component: HomeComponent,
  resolve: [{
    token: "foo",
    resolveFn: resolveFn
  }],

};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: [state],
      otherwise: "home"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
