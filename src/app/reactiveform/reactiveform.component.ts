import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm =new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
 })

  collectData(){
    console.warn(this.loginForm.value);
  }

}
