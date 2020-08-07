import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apiform',
  templateUrl: './apiform.component.html',
  styleUrls: ['./apiform.component.css']
})
export class ApiformComponent implements OnInit {
alert:boolean=false

  constructor(private http:HttpClient) { }
  url="http://127.0.0.1:8000/api/add";
  ngOnInit(): void {
  }
  onSubmit(userForm){
    this.http.post(this.url, userForm).subscribe((result)=>{

      console.warn(result);
      this.alert=true;
    })
    //console.warn(userForm);
  }
  closeAlert(){
    this.alert=false;
  }

}
