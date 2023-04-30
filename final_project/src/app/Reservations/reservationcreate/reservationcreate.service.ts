import { Injectable } from '@angular/core';
import {reservation} from "./reservation.model";
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationcreateService {

  constructor(private http:HttpClient) { }

  private reservation: reservation[] = [];
  private reservationUpDate = new Subject <reservation[]>()

  getreservations()
  {
    this.http.get<{message: string, reservation: reservation[]}>('http://localhost:3000/api/reservation').
    subscribe((reservationData) => {
      this.reservation = reservationData.reservation;
      this.reservationUpDate.next([...this.reservation]);
    })
  }

  getreservationUpdateListener(){
    return this.reservationUpDate.asObservable();
  }

  addreservation(name:string,time:string,party:number)
  {
    const reservation: reservation={id:null, Name:name, Time:time, Party:party};
    this.http.post<{message:string}>("http://localhost:3000/api/reservation",reservation)
    .subscribe((responseData) =>{
      console.log(responseData.message)
      this.reservation.push(reservation);
      this.reservationUpDate.next([...this.reservation])
    })
  }
}
