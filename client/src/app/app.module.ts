import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CustomTextComponent } from './custom-text/custom-text.component';
import { AboutGabeComponent } from './about-gabe/about-gabe.component';
import { FooterComponent } from './footer/footer.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CustomTextComponent,
    AboutGabeComponent,
    FooterComponent,
    AboutSiteComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
