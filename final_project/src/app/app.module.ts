import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import{ MatInputModule} from '@angular/material/input';
import{ MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { ReviewcreateComponent} from './review/reviewcreate/reviewcreate.component';
import { HeadCreateComponent } from './head-create/head-create.component';
import { ReviewListComponent } from './review/reviewcreate/review-list/review-list.component';
import { DisplayReviewComponent } from './display-review/display-review.component';
import { RouterModule } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';
import { ReservationDisplayComponent } from './reservation-display/reservation-display.component';
import { ReservationListComponent } from './reservation/reservationcreate/reservation-list/reservation-list.component';
import { ReservationcreateComponent } from './reservation/reservationcreate/reservationcreate.component'
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewcreateComponent,
    HeadCreateComponent,
    ReviewListComponent,
    DisplayReviewComponent,
    MenuComponent,
    ReservationDisplayComponent,
    ReservationListComponent,
    ReservationcreateComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent },
      {path: 'display-review', component: DisplayReviewComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'reservation-display', component: ReservationDisplayComponent},
      {path: 'reservation-list',component: ReservationListComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
