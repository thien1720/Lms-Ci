import { Component, OnInit  } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @Viewchild('formLogin')loginForm: ngForm;

  onSubmit(loginForm: NgForm){
    console.log(loginForm.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
