import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TextinputComponent } from './components/textinput/textinput.component';
import { ImageHolderComponent } from './components/image-holder/image-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextinputComponent,
    ImageHolderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
