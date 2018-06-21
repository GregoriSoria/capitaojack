import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TyperEffectComponent } from './components/typer-effect/typer-effect.component';
import { HttpClientModule } from '@angular/common/http';
import { PageProvider } from './providers/provider-page.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TyperEffectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    PageProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
