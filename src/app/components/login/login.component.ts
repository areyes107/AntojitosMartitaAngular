import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
    this.firebaseAuth.onAuthStateChanged((user) => {
      if (user){
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/admin']);
      }else{
        localStorage.setItem('user', null);
      }
    });
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async handleSubmit() {
    this.loading = true;
    await this.firebaseAuth.signInWithEmailAndPassword(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    console.log(await this.firebaseAuth.currentUser);
    this.loading = false;
  }
}
