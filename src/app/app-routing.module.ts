import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
 {path: '', component: HomeComponent}, // se utiliza solo para la página principal, 1 vez
 {path: 'home', component: HomeComponent},
 {path: '**', component: NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
