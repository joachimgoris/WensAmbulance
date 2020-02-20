import { Component, OnInit } from '@angular/core';
import { Wish } from 'src/app/models/wish.model';

@Component({
  selector: 'app-my-wishes',
  templateUrl: './my-wishes.component.html',
  styleUrls: ['./my-wishes.component.scss']
})
export class MyWishesComponent implements OnInit {
  myWishes: Wish[] = [];

  constructor() { }

  ngOnInit(): void {
    let wishIds = ["WISH1", "WISH2", "WISH3"];
    wishIds.forEach(id => {
      let wish = new Wish();
      wish.ID = id;
      this.myWishes.push(wish);   
      console.log(this.myWishes)
    });
  }

}
