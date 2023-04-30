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

  onAddreservation(form: NgForm){
    if(form.invalid)
    {
      return;
    }
    this.ReservationcreateService.addreservation(form.value.title,form.value.content,form.value.stars);
    form.resetForm();
  }
}
