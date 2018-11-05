import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { SearchComponent } from './shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule.withServerTransition({ appId: 'state transition' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
