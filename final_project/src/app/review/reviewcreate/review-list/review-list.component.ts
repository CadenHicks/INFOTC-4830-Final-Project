import { Component, OnDestroy, OnInit } from '@angular/core';
import {Review} from '../review.model';
import { ReviewcreateService } from '../reviewcreate.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit, OnDestroy{

  reviews: Review[]=[];
  private reviewsSub: Subscription;

  constructor(public ReviewcreateService: ReviewcreateService){}

  ngOnInit(){
    this.ReviewcreateService.getReviews();
    this.reviewsSub = this.ReviewcreateService.getReviewUpdateListener().subscribe((reviews:Review[])=>{
      this.reviews = reviews;
    })
  }

  ngOnDestroy(){
      this.reviewsSub.unsubscribe();
  }
}
