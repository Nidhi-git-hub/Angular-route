import { Component, OnInit } from '@angular/core';
import { RjitService } from '../rjit.service';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {

  constructor(private rjit:RjitService) { }
  name;
  stdData;

  ngOnInit(): void {
    this.name=this.rjit.name;
    this.stdData=this.rjit.stdData;
  }

}
