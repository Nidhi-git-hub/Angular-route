import { Component, OnInit } from '@angular/core';
import { ReactiveformService } from '../reactiveform.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';

@Component({
  selector: 'app-showid',
  templateUrl: './showid.component.html',
  styleUrls: ['./showid.component.css']
})
export class ShowidComponent implements OnInit {
  resData;
  collection;
  id: number;
  post: Blog;

  constructor(private workingservice:ReactiveformService,
    private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.workingservice.getBlog(+id).subscribe((result)=>{
      this.resData=result;
      this.collection=this.resData.product;
      console.log(result);
     })
  }

}
