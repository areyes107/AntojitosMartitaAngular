import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  loading = true;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.checkUser();
  }
  async checkUser() {
    console.log(await this.firebaseAuth.currentUser);
    if (!(await this.firebaseAuth.currentUser)) {
      this.router.navigate(['/login']);
    }
    this.loading = false;
  }
}
