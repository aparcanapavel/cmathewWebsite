import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';
import { ConfigData } from './configData';
import { BlogComponent } from './home/blog/blog.component';
import { ArticleComponent } from './home/article/article.component';
import { ReversePipe } from './reverse.pipe';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    ExperienceComponent,
    ContactComponent,
    BlogComponent,
    ArticleComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
