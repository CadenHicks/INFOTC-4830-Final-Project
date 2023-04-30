import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import { Reservation } from '../reservation.model';
import { ReservationcreateService } from '../reservationcreate.service';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  reservations: Reservation[]=[];
  private reservationsSub: Subscription;

  constructor(public ReservationcreateService: ReservationcreateService){}

  ngOnInit(){
    this.ReservationcreateService.getReservations();
    this.reservationsSub = this.ReservationcreateService.getReservationUpdateListener().subscribe((reservation:Reservation[])=>{
      this.reservations = reservation;
    })
  }

  ngOnDestroy(){
      this.reservationsSub.unsubscribe();
  }
}
