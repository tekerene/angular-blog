import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastRef: any = 1;

  constructor(private toastr: ToastrService) { }

  // Error message
  showErrorToast(
    message: string,
    title: string = "",
    timeOut: number = 5000,
    extendedTimeOut: number = 5000,
    easeTime: number = 700
  ) {
    this.removeToast();
    this.toastRef = this.toastr.warning(message, title, {
      timeOut,
      extendedTimeOut,
      easeTime,
      closeButton: true,
      easing: "ease-in",
      positionClass: "toast-top-center",
      enableHtml :  true
    });
  }

  // Info message
  showInfoToast(
    message: string,
    title: string = "",
    timeOut: number = 5000,
    extendedTimeOut: number = 5000,
    easeTime: number = 700
  ) {
    this.removeToast();
    this.toastRef = this.toastr.info(message, title, {
      timeOut,
      extendedTimeOut,
      easeTime,
      closeButton: true,
      easing: "ease-in",
      positionClass: "toast-top-center",
      enableHtml :  true
    });
  }

  // Success message
  showSuccessToast(
    message: string,
    title: string = "",
    timeOut: number = 5000,
    extendedTimeOut: number = 5000,
    easeTime: number = 700
  ) {
    this.removeToast();
    this.toastRef = this.toastr.success(message, title, {
      timeOut,
      extendedTimeOut,
      easeTime,
      closeButton: true,
      easing: "ease-in",
      positionClass: "toast-top-center",
      enableHtml :  true
    });
  }

  // Remove last toastr
  removeToast = () =>{
    this.toastr.clear(this.toastRef.ToastId);
  }
}
