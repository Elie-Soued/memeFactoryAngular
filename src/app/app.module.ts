//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

//Pipe
import { SanitizePipe } from './sanitize.pipe';

//Components
import { AppComponent } from './app.component';
import { ImageHolderComponent } from './components/image-holder/image-holder.component';
import { InputComponent } from './components/input/input.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AppHolderComponent } from './components/app-holder/app-holder.component';
import { TextBoxComponent } from './components/text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageHolderComponent,
    InputComponent,
    ButtonsComponent,
    AppHolderComponent,
    TextBoxComponent,
  ],
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
