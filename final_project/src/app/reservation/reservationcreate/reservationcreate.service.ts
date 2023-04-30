import { Injectable } from '@angular/core';
import {Reservation} from "./reservation.model";
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationcreateService {

  constructor(private http:HttpClient) { }

  private reservations: Reservation[] = [];
  private reservationUpDate = new Subject <Reservation[]>()

  getReservations()
  {
    this.http.get<{message: string, reservations: Reservation[]}>('http://localhost:3000/api/reservations').
    subscribe((reservationData) => {
      this.reservations = reservationData.reservations;
      this.reservationUpDate.next([...this.reservations]);
    })
  }

  getReservationUpdateListener(){
    return this.reservationUpDate.asObservable();
  }

  addReservation(name:string,time:string,party:number)
  {
    const reservation: Reservation={id:null, name:name, time:time, party:party};
    this.http.post<{message:string}>("http://localhost:3000/api/reservations",reservation)
    .subscribe((responseData) =>{
      console.log(responseData.message)
      this.reservations.push(reservation);
      this.reservationUpDate.next([...this.reservations])
    })
  }
}
