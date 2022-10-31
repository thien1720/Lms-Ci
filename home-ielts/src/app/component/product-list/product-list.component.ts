import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product(1
      , "../../../assets/images/learning-progress.svg"
      , "Learning Progress",
      "../../../assets/images/learning-progress-active.svg"),
    new Product(2
      , "../../../assets/images/todo-list-for.svg"
      , "To-do List for Today",
      "../../../assets/images/todo-list-active.svg"),
    new Product(3
      , "../../../assets/images/skill-diagram.svg"
      , "Skill Diagram",
      "../../../assets/images/skill-diagram-active.svg"),
    new Product(4
      , "../../../assets/images/unit-learning.svg"
      , "Unit",
      "../../../assets/images/unit-learning-active.svg"),

  ]
  selectedList: any
  constructor() { }


  ngOnInit(): void {
    this.selectedList = this.products[1].productId
  }

  openContent(page: any) {
    this.selectedList = page
    // console.log(this.selectedList)
  }
}
