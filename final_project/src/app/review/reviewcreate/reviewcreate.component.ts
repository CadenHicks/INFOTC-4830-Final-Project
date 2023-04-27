import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewcreateService } from './reviewcreate.service';

@Component({
  selector: 'app-reviewcreate',
  templateUrl: './reviewcreate.component.html',
  styleUrls: ['./reviewcreate.component.css']
})
export class ReviewcreateComponent {

  constructor(public ReviewcreateService: ReviewcreateService){}

  onAddReview(form: NgForm){
    if(form.invalid)
    {
      return;
    }
    this.ReviewcreateService.addReview(form.value.title,form.value.content,form.value.stars);
    form.resetForm();
  }
}
