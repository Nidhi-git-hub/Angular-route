import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LaravelComponent } from './laravel/laravel.component';
import { AngularComponent } from './angular/angular.component';
import { RjitComponent } from './rjit/rjit.component';
import { ReactiveformapiComponent } from './reactiveformapi/reactiveformapi.component';
import { EditidComponent } from './editid/editid.component';
import { ShowidComponent } from './showid/showid.component';


const routes: Routes = [
  {path:'',component:ReactiveformapiComponent},
  {path:'rjit',component:RjitComponent},
  {path: 'add/:id', component: ReactiveformapiComponent },
  {path: 'showid/:id', component: ShowidComponent },
  // {path:'',component:HomeComponent},
  // {
  // path:'about',
  //   children:[
  //     {path:'',component:AboutComponent},
  //     {path:'html',component:HtmlComponent},
  //     {path:'css',component:CssComponent},
  //     {path:'bootstrap',component:BootstrapComponent}
  //   ],
    
  // },
  // {
  //   path:'blog',
  //     children:[
  //       {path:'',component:BlogComponent},
  //       {path:'javascript',component:JavascriptComponent},
  //       {path:'laravel',component:LaravelComponent},
  //       {path:'angular',component:AngularComponent}
  //     ],
      
  //   },
  // {path:'login',component:LoginComponent},
  // {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
