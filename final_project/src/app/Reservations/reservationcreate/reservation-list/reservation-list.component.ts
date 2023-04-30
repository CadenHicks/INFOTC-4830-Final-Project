import { Component, OnDestroy, OnInit } from '@angular/core';
import {reservation} from "../reservation.model"
import { ReservationcreateService } from "../reservationcreate.service"
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit, OnDestroy{

  reservations: reservation[]=[];
  private reservationsSub: Subscription;

  constructor(public ReservationcreateService: ReservationcreateService){}

  ngOnInit(){
    this.ReservationcreateService.getreservations();
    this.reservationsSub = this.ReservationcreateService.getreservationUpdateListener().subscribe((reservations:reservation[])=>{
      this.reservations = reservations;
    })
  }

  ngOnDestroy(){
      this.reservationsSub.unsubscribe();
  }
}
