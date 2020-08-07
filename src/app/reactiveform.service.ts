import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class ReactiveformService {
  url="http://127.0.0.1:8000/api/";

  constructor(private http:HttpClient) { }

  getdata():Observable<any>{  // converts data in array type

    return this.http.get(this.url+'allData')
  }
  createblog(data){
    //console.log(data)
    return this.http.post(this.url+'add',data)
  }
  getBlog(id: number):Observable<any>{
    return this.http.get<Blog>(this.url + 'show/' + id);
  }
  updateblog(blog)
  {
    console.log(blog)
    return this.http.post(this.url+ 'update',blog)
  }
  deleteBlog(id: number) {
    return this.http.delete(this.url + 'delete/' + id)
      
    
  }

}