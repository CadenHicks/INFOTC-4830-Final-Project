import { Component, OnDestroy, OnInit } from '@angular/core';
import {Reservation} from '../reservation.model';
import { ReservationcreateService } from '../reservationcreate.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit, OnDestroy{

  reservations: Reservation[]=[];
  private reservationsSub: Subscription;

  constructor(public ReservationcreateService: ReservationcreateService){}

  ngOnInit(){
    this.ReservationcreateService.getReservations();
    this.reservationsSub = this.ReservationcreateService.getReservationUpdateListener().subscribe((reservations:Reservation[])=>{
      this.reservations = reservations;
    })
  }

  ngOnDestroy(){
      this.reservationsSub.unsubscribe();
  }
}
