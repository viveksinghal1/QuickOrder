import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private _authService: AuthService, private _router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  isFieldInvalid(field: string) {
    return (this.regForm.get(field).invalid && this.regForm.get(field).touched)
      || (this.regForm.get(field).untouched && this.submitted);
  }

  getErrorMsg(field: string, minlength?: number) {
    let result = "";
    let errors = this.regForm.get(field).errors;
    let element = this.regForm.get(field);
    if (element.touched && errors['required']) {
      result = 'Field ' + field + " is required";
    }
    else if (element.touched && errors['minlength']) {
      result = field + " must be at least " + minlength + " characters long";
    } else if (element.touched && errors['email']) {
      result = 'Email should in abc@abc.com form';
    }
    return result;
  }

  reset() {
    if (this.submitted) {
      this.submitted = false;
      this.regForm.markAsUntouched();
      this.regForm.markAsPristine();
    }
  }

  register() {
    this.submitted = true;
    if (this.regForm.valid) {
      this._authService.register(this.regForm.value)
      .subscribe(
        res => {
          this.toastr.success("Successfully registered", "Success");
          this._router.navigate(['/products']);
        },
        err => {
          this.toastr.error(err.error, "Error");
        }
      )
    }
  }

}
