import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogPostSectionComponent } from './blog-post-section/blog-post-section.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
