import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private _authService: AuthService, private _router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  isFieldInvalid(field: string) {
    return (this.loginForm.get(field).invalid && this.loginForm.get(field).touched)
      || (this.loginForm.get(field).untouched && this.submitted);
  }

  getErrorMsg(field: string, minlength?: number) {
    let result = "";
    let errors = this.loginForm.get(field).errors;
    let element = this.loginForm.get(field);
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
      this.loginForm.markAsUntouched();
      this.loginForm.markAsPristine();
    }
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this._authService.loginUser(this.loginForm.value)
      .subscribe(
        res => {
          this.toastr.success("Successfully signed in", "Success");
          localStorage.setItem('token', res.idToken);
          localStorage.setItem('name', res.name);
          localStorage.setItem('email', res.email);
          this._router.navigate(['/products']);
        },
        err => {
          console.log('error', err.error);
          this.toastr.error(err.error, "Error");
          this.reset();
        }
      )
    }
  }

}
