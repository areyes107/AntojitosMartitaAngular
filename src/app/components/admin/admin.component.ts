import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  file: any;
  typeOfSubmit = 'saucers';
  toSubmitForm: FormGroup;
  loading = false;
  constructor(
    private router: Router,
    private angularFireStore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.checkUser();
    this.buildForm();
  }
  async checkUser() {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
    }
    this.loading = false;
  }

  buildForm() {
    this.toSubmitForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
    });
  }

  handdleFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
    }
  }

  async submit() {
    if (this.file && this.typeOfSubmit) {
      this.loading = true;
      const documentCreated = await this.angularFireStore
        .collection(this.typeOfSubmit)
        .add(this.toSubmitForm.value);
      const uploadTask = await this.angularFireStorage.upload(
        `${this.typeOfSubmit}/${documentCreated.id}.${this.file.name
          .split('.')
          .pop()}`,
        this.file
      );
      await this.angularFireStore
        .collection(this.typeOfSubmit)
        .doc(documentCreated.id)
        .update({ photoUrl: await uploadTask.ref.getDownloadURL() });
      this.file = null;
      this.toSubmitForm.reset();
    }
    this.loading = false;
  }
}
