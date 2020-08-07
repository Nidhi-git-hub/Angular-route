import { Component } from '@angular/core';
import { FeeapiService } from './service/feeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  myname='how to developer'
  mydate= new Date(1993,10,15);  //date 0,jan,1,feb
  mynumber:number=67.44;  //decimal number
  mycurrency:number=6744;  //currency number

  students:any[]=[

    {id:1,name:'vikas',email:'jain@gmail.com',address:'Gwalior'},
    {id:2,name:'mohit',email:'jain@gmail.com',address:'Bhind'},
    {id:3,name:'viki',email:'jain@gmail.com',address:'Etawah'},
    {id:4,name:'ram',email:'jain@gmail.com',address:'Delhi'},
    
  ];
  
  newsdata;

  constructor(private feeapi:FeeapiService){}
  ngOnInit(): void {
    this.feeapi.getdata()
      .subscribe
      (
         data=>
         {
           this.newsdata =data.product;
           console.log(this.newsdata); 
         }
      ) 
    
  }
}
