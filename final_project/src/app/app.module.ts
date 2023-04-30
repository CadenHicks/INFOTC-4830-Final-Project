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
import { ReservationListComponent } from './Reservations/reservationcreate/reservation-list/reservation-list.component';
import { ReservationcreateComponent } from './Reservations/reservationcreate/reservationcreate.component';
@NgModule({
  declarations: [
    AppComponent,
    ReviewcreateComponent,
    HeadCreateComponent,
    ReviewListComponent,
    DisplayReviewComponent,
    ReservationDisplayComponent,
    ReservationListComponent,
    ReservationcreateComponent
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
      {path: 'display-review', component: DisplayReviewComponent},
      {path: 'reservation-display', component: ReservationDisplayComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
