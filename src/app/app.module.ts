import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionGroupComponent } from './accordion/accordion-group/accordion-group.component';
import { BaseComponent } from './base/base.component';
import { HoverDirective } from './directive/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionGroupComponent,
    BaseComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
