import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RjitService {
  name='RJIT COLLEGE';

  stdData:any[]=[

    {id:1,name:'vikas',email:'jain@gmail.com',address:'Gwalior'},
    {id:2,name:'mohit',email:'jain@gmail.com',address:'Bhind'},
    {id:3,name:'viki',email:'jain@gmail.com',address:'Etawah'},
    {id:4,name:'ram',email:'jain@gmail.com',address:'Delhi'},
    
  ];

  constructor() { }
}
