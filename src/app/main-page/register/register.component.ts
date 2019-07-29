import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  personalInfoForm: FormGroup;
  studiesInfoForm: FormGroup;
  contactInfoForm: FormGroup;
  docConfirmationForm: FormGroup;

  continents = ['Africa','Europa', 'America', 'Asia']
  paises = ['Angola','Brasil', 'Portugal', 'Poland']
  degrees = ['doutor engenheiro','doutor','mestre engenheiro','mestre', 'engenheiro','licenciado']

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.personalInfoForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      gender: ['', Validators.required],
      naturality: ['', Validators.required],
    });

    this.studiesInfoForm= this.fb.group({
      university: ['', Validators.required],
      continent: ['', Validators.required],
      countre: ['', Validators.required],
      field: ['', Validators.required],
      course: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      degree: ['', Validators.required],
      sponsor: ['', Validators.required],
    });

    this.contactInfoForm = this.fb.group({
      mobilePhone: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.docConfirmationForm = this.fb.group({
      fourthCtrl: ['', Validators.required],
    });
    
  }

  onPersonalInfoFormSubmit() {
    this.personalInfoForm.markAsDirty();
  }

  onStudiesInfoFormSubmit() {
    this.studiesInfoForm.markAsDirty();
  }

  onContactInfoFormSubmit() {
    this.contactInfoForm.markAsDirty();
  }
  onDocConfirmationFormSubmit() {
    this.docConfirmationForm.markAsDirty();
  }
}


