import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { CombosComponent } from './components/combos/combos.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SaucersComponent } from './components/saucers/saucers.component';


const routes: Routes = [
 {path: '', component: HomeComponent}, // se utiliza solo para la página principal, 1 vez
 {path: 'home', component: HomeComponent},
 {path: 'saucers', component: SaucersComponent},
 {path: 'combos', component: CombosComponent},
 {path: 'acercaDe', component: AcercaDeComponent},
 {path: '**', component: NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
