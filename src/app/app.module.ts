import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AdminComponent } from './components/admin/admin.component';
import { CombosComponent } from './components/combos/combos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SaucersComponent } from './components/saucers/saucers.component';
import { SearchPipe } from './pipes/search.pipe';
import { NewsComponent } from './components/news/news.component';
import { FamiliarCombosComponent } from './components/familiar-combos/familiar-combos.component';
import { ModalComponent } from './components/modal/modal.component';
import { ComboModalComponent } from './components/combo-modal/combo-modal.component';
import { FamiliarComboModalComponent } from './components/familiar-combo-modal/familiar-combo-modal.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { PromotionModalComponent } from './components/promotion-modal/promotion-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    SaucersComponent,
    CombosComponent,
    SearchPipe,
    AcercaDeComponent,
    AdminComponent,
    LoginComponent,
    NewsComponent,
    FamiliarCombosComponent,
    ModalComponent,
    ComboModalComponent,
    FamiliarComboModalComponent,
    PromotionsComponent,
    PromotionModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
