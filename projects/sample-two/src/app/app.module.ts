import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { SubcomponentModule } from './subcomponent/subcomponent.module';

@NgModule({
  declarations: [
    AppComponent,
    SubcomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SubcomponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
