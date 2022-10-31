import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-learn-lesson',
  templateUrl: './learn-lesson.component.html',
  styleUrls: ['./learn-lesson.component.scss']
})
export class LearnLessonComponent implements OnInit {

  navigations: Product[] = [
    new Product(1
      , "../../../assets/images/ic_round-lesstion.svg"
      , "Lesstion",
      "../../../assets/images/learning-progress-active.svg"),
    new Product(2
      , "../../../assets/images/ic_round-home-work.svg"
      , " Homeword",
      "../../../assets/images/learning-progress-active.svg"),
    new Product(3
      , "../../../assets/images/ic_round-note-alt.svg"
      , "Notes",
      "../../../assets/images/learning-progress-active.svg"),
    new Product(4
      , "../../../assets/images/ic_extra-practice.svg"
      , "Extra practice",
      "../../../assets/images/learning-progress-active.svg"),
    new Product(5
      , "../../../assets/images/ic-class-forum-2.svg"
      , "Class forum",
      "../../../assets/images/learning-progress-active.svg"),

  ];
  selectedList : any;
  constructor() { }

  ngOnInit(): void {
    this.selectedList = this.navigations[0].productId;
  }

}
