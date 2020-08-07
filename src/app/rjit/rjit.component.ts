import { Component, OnInit } from '@angular/core';
import { ReactiveformService } from '../reactiveform.service';

@Component({
  selector: 'app-rjit',
  templateUrl: './rjit.component.html',
  styleUrls: ['./rjit.component.css']
})
export class RjitComponent implements OnInit {
  resData;
  newsdata;

  constructor(private workingservice:ReactiveformService
    ) { }

  ngOnInit(): void {
    //const url="http://127.0.0.1:8000/api/allData";
    //const url="http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-18&sortBy=publishedAt&apiKey=fdb1f45eeffe414592ed7c736f63161e";
    // this.http.get(url).subscribe(res=>{
    // console.log(res);
    // this.resData=res;
    // this.newsdata=this.resData.product;
    // console.log(this.newsdata);
    // })
    this.workingservice.getdata()
      .subscribe
      (
         data=>
         {
           this.newsdata =data.product;
           console.log(this.newsdata); 
         }
      ) 
  }
  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.workingservice.deleteBlog(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
       
      )}
    }
  

}
