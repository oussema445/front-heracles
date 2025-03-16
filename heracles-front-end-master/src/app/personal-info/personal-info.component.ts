import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personalInfoForm = this.fb.group({
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.personalInfoForm.valid) {
      console.log('Formulaire des coordonnées soumis', this.personalInfoForm.value);
    }
  }
}