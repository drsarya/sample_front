import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component'
import {HttpService} from "./http.service";
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [HttpClientModule, BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
