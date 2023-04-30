import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservationcreateService } from './reservationcreate.service';

@Component({
  selector: 'app-reservationcreate',
  templateUrl: './reservationcreate.component.html',
  styleUrls: ['./reservationcreate.component.css']
})
export class ReservationcreateComponent {

  constructor(public ReservationcreateService: ReservationcreateService){}

  onAddReservation(form: NgForm){
    if(form.invalid)
    {
      return;
    }
    this.ReservationcreateService.addReservation(form.value.name,form.value.time,form.value.party);
    form.resetForm();
  }
}
