import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { ReactiveformService } from '../reactiveform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactiveformapi',
  templateUrl: './reactiveformapi.component.html',
  styleUrls: ['./reactiveformapi.component.css']
})
export class ReactiveformapiComponent implements OnInit {
 resData;
 collection;
 pageTitle;
 imagePath: string;
  constructor(private workingservice:ReactiveformService,
    private router: Router,
    private route: ActivatedRoute) { }
  alert:boolean=false;

  pninfosys =new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    category:new FormControl(''),
    brand:new FormControl(''),
    desc:new FormControl(''),
    price:new FormControl(''),
    image: new FormControl('')
 })

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.pageTitle = 'Edit Resto';
      this.workingservice.getBlog(+id).subscribe((result)=>{
        this.resData=result;
        this.collection=this.resData.product;
         //console.log(this.collection);
         this.pninfosys.patchValue({
          name: this.collection.name,
          category: this.collection.category,
          
          //name: res.name,
          //category: result.category,
          brand: this.collection.brand,
          desc: this.collection.desc,
          price: this.collection.price,
          id: this.collection.id
        });
        this.imagePath = this.collection.imgpath

      });
    }
  }
  
onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pninfosys.get('image').setValue(file);
      console.log(this.pninfosys);
    }
  }

  collectData () {
  //console.log(this.pninfosys.value)
  const formData = new FormData();
  formData.append('name', this.pninfosys.get('name').value);
  formData.append('category', this.pninfosys.get('category').value);
  formData.append('brand', this.pninfosys.get('brand').value);
  formData.append('desc', this.pninfosys.get('desc').value);
  formData.append('price', this.pninfosys.get('price').value);
  formData.append('image', this.pninfosys.get('image').value);
  const id = this.pninfosys.get('id').value;
if (id) {
      console.log('Update Product id ' + id);
      formData.append('id', id);
      this.workingservice.updateblog(formData).subscribe((result)=>{
          console.log(result)
          //this.router.navigate(['/list']);
        })
      }else
      {
       this.pageTitle = 'Add Resto';
        this.workingservice.createblog(formData).subscribe((result)=>{
         console.log(result)
       this.router.navigate(['/list']);
          
       })

      
     this.pninfosys.reset({})
      }
    

  }
//   console.log(formData)
//  this.workingservice.createblog(formData).subscribe((result)=>{
//   console.log(result);
//   this.router.navigate(['/rjit']);
        
//    })
//    this.pninfosys.reset({})
// }

  // collectData(){
  //   this.workingservice.createblog(this.pninfosys.value).subscribe((result)=>{
  //     console.log(result);
  //     this.alert=true;
  //     })
  //     this.pninfosys.reset({})
  // }
  // closeAlert(){
  //   this.alert=false;
  // }

}
