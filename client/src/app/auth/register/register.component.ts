import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastService } from 'src/app/_services/toast.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fullName = '';
  username = '';
  password = '';
  userProfileReference = '';
  userProfileUrl = '';
   bio = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService) { }

  ngOnInit() {
   this.formValidate();
  }
  
  formValidate(){
    this.registerForm = this.formBuilder.group({
      fullName : [null, Validators.required],
      username : [null, Validators.required],
      password : [null, Validators.required],
      userProfileReference: ['', Validators.required],
      userProfileUrl: ['', Validators.required],
      bio : ['', Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.authService.register(form)
      .subscribe(res => {
        this.router.navigate(['login']);
        this.toastService.showSuccessToast(res.message, "successfull");
      }, (err) => {
        console.log(err);
        alert(err.error);
        this.isLoadingResults = false;
        this.toastService.showErrorToast(err.error.message, "Oups!!!");
      });
  }

}
