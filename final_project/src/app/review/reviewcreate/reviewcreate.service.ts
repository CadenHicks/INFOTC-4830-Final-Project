import { Injectable } from '@angular/core';
import {Review} from "./review.model";
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewcreateService {

  constructor(private http:HttpClient) { }

  private reviews: Review[] = [];
  private reviewUpDate = new Subject <Review[]>()

  getReviews()
  {
    this.http.get<{message: string, reviews: Review[]}>('http://localhost:3000/api/reviews').
    subscribe((reviewData) => {
      this.reviews = reviewData.reviews;
      this.reviewUpDate.next([...this.reviews]);
    })
  }

  getReviewUpdateListener(){
    return this.reviewUpDate.asObservable();
  }

  addReview(content:string)
  {
    const review: Review={id:null, content: content};
    this.http.post<{message:string}>("http://localhost:3000/api/reviews",review)
    .subscribe((responseData) =>{
      console.log(responseData.message)
      this.reviews.push(review);
      this.reviewUpDate.next([...this.reviews])
    })
  }
}
