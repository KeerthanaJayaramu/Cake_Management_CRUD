import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CreateCakeComponent } from './create-cake/create-cake.component';
import { FormsModule} from '@angular/forms';
import { UpdateCakeComponent } from './update-cake/update-cake.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component'

@NgModule({
  declarations: [
    AppComponent,
    CakeListComponent,
    CreateCakeComponent,
    UpdateCakeComponent,
    CakeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
