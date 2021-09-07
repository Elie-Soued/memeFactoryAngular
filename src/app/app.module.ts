import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ImageHolderComponent } from './components/image-holder/image-holder.component';
import { SanitizePipe } from './sanitize.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [AppComponent, ImageHolderComponent, InputComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [SanitizePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
