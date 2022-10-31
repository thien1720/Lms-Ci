import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router'; 

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) {
    this.productForm = new FormGroup({
      "productTitle": new FormControl(null, Validators.required),
      "productImg": new FormControl(null),

    })

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
  }
  onSubmit(){
    if(this.productForm.invalid){
      console.log("no success")
      return 
    }
    console.log(this.productForm.value)
  }

  ngOnInit(): void {
  }

}
