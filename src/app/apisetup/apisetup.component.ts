import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apisetup',
  templateUrl: './apisetup.component.html',
  styleUrls: ['./apisetup.component.css']
})
export class ApisetupComponent implements OnInit {
  newapi;
  newdata;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const url="http://127.0.0.1:8000/api/add";
    this.http.get(url).subscribe(res=>{
      console.log(res);
    //   this.newapi=res;
    // this.newdata=this.newapi.articles;
    // console.log(this.newdata);
    })

  }

}
