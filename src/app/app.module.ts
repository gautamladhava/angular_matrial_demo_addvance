import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AutoCompleteComponent } from './component/auto-complete/auto-complete.component';
import { BadgeComponent } from './component/badge/badge.component';
import { ReactiveFormsModule } from '@angular/forms';


import { CardComponent } from './component/card/card.component';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { ChipsComponent } from './component/chips/chips.component';
import { DateComponent } from './component/date/date.component';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { MatModule } from './mat/mat.module';
import { ProgreseComponent } from './component/progrese/progrese.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SliderComponent } from './component/slider/slider.component';
import { StepperComponent } from './component/stepper/stepper.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AutoCompleteComponent,
    BadgeComponent,
  
    CardComponent,
    CheckBoxComponent,
    ChipsComponent,
    DateComponent,
    PaginatorComponent,
    ProgreseComponent,
    SidebarComponent,
    SliderComponent,
    StepperComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
