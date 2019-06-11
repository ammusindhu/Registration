import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  yearpass: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')], Validators.minLength(20)],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')], Validators.minLength(20)],
      class: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      yop: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      permarks: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  keyhandler(eve: any) {
    if (eve) {
      return true;

    } else {
      return false;
    }

  }

  alphabatOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      return false;
    }
    return true;

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  numberalphaOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      return false;
    }
    return true;

  }
  onSubmit() {
    var getyear = new Date(this.yearpass)
    console.log(getyear.getFullYear());
    if (getyear.getFullYear() > 2017) {
      alert("year should be less than 2017");

    }
    // if (this.userForm.valid) {
    //   alert('Registered Successfully!!')
    // } else {
    //   alert('Please enter valid details to register!!')
    // }
  }


}
